import { eq, gt, gte, iin, includes, is, like, lt, lte, neq } from '../../filters';
import { and, not, or } from '../../logicals';
import { pipe } from '../../operators/pipe/pipe';
import { Filter, ObjectFilterType, Operator, Operators, PropertyFilterType } from '../../types';
import { entriesOf, isEqual, isFunction, isPlainObject } from '../object';
import { FALSE } from '../object/object.utils';

const parseOperators = <K extends keyof PropertyFilterType<any, any>>(operatorConfig: Record<K, PropertyFilterType<any, any>[K]>): Operators  => {
  return [...entriesOf(operatorConfig)].reduce((accumulator, [operatorKey, operatorValue]) => accumulator.concat(parseOperator(operatorKey, operatorValue)), [] as Operators);
};

const parseOperator = (operatorKey: keyof PropertyFilterType<any, any>, operatorValue: any): Operator => {
  return (
    operatorKey === '$eq' ? eq(operatorValue) :
    operatorKey === '$neq' ? neq(operatorValue) :
    operatorKey === '$is' ? is(operatorValue) :
    operatorKey === '$lt' ? lt(operatorValue) :
    operatorKey === '$lte' ? lte(operatorValue) :
    operatorKey === '$gt' ? gt(operatorValue) :
    operatorKey === '$gte' ? gte(operatorValue) :
    operatorKey === '$in' ? iin(operatorValue) :
    operatorKey === '$includes' ? includes(operatorValue) :
    operatorKey === '$like' ? like(operatorValue) :
    operatorKey === '$or' ? or(...operatorValue.map((op: any) => pipe(...parseOperators(op)))) :
    operatorKey === '$and' ? and(...operatorValue.map((op: any) => pipe(...parseOperators(op)))) :
    operatorKey === '$not' ? not(pipe(...parseOperators(operatorValue))) :
    FALSE
  );
};

export function createFilterFn<E>(predicate: Filter<E>): Filter<E>;
export function createFilterFn<E extends object>(predicate: ObjectFilterType<E>): Filter<E>;
export function createFilterFn <E>(predicate: any): Filter<E> {
  if (isFunction(predicate)) {
    return predicate as Filter;
  }

  return (element: any) => {
    return Object.entries(predicate).reduce((accumulator, [property, filterConfigs]) => accumulator && isPlainObject(filterConfigs) ? parseOperators(filterConfigs).every((operator) => operator(element[property])) : isEqual(element[property], filterConfigs), true);
  }
}
