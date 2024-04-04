import { eq, gt, gte, iin, includes, is, like, lt, lte, neq } from '../../filters';
import { and, not, or } from '../../logicals';
import { pipe } from '../../operators/pipe/pipe';
import { Filter, Operator, Operators, QueryFilterType } from '../../types';
import { entriesOf, isEqual, isFunction, isPlainObject } from '../object';
import { FALSE } from '../object/object.utils';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const parseOperators = <K extends keyof QueryFilterType<any>>(operatorConfig: Record<K, QueryFilterType<any>[K]>): Operators => {
  return [...entriesOf(operatorConfig)].reduce((accumulator, [operatorKey, operatorValue]) => accumulator.concat(parseOperator(operatorKey, operatorValue)), [] as Operators);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const parseOperator = (operatorKey: keyof QueryFilterType<any>, operatorValue: any): Operator => {
  return operatorKey === '$eq'
    ? eq(operatorValue)
    : operatorKey === '$neq'
      ? neq(operatorValue)
      : operatorKey === '$is'
        ? is(operatorValue)
        : operatorKey === '$lt'
          ? lt(operatorValue)
          : operatorKey === '$lte'
            ? lte(operatorValue)
            : operatorKey === '$gt'
              ? gt(operatorValue)
              : operatorKey === '$gte'
                ? gte(operatorValue)
                : operatorKey === '$in'
                  ? iin(operatorValue)
                  : operatorKey === '$includes'
                    ? includes(operatorValue)
                    : operatorKey === '$like'
                      ? like(operatorValue)
                      : operatorKey === '$or'
                        ? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                          or(...operatorValue.map((op: any) => pipe(...parseOperators(op))))
                        : operatorKey === '$and'
                          ? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            and(...operatorValue.map((op: any) => pipe(...parseOperators(op))))
                          : operatorKey === '$not'
                            ? not(pipe(...parseOperators(operatorValue)))
                            : FALSE;
};

export function createFilterFn<E>(predicate: Filter<E>): Filter<E>;
export function createFilterFn<E extends object>(predicate: QueryFilterType<E>): Filter<E>;
export function createFilterFn<E>(predicate: unknown) {
  if (isFunction(predicate)) {
    return predicate as Filter;
  }

  return (element: E) => {
    if (isPlainObject(element)) {
      return [...entriesOf(predicate)].reduce((accumulator, [property, filterConfigs]) => (accumulator && isPlainObject(filterConfigs) ? parseOperators(filterConfigs).every((operator) => operator(element[property])) : isEqual(element[property], filterConfigs)), true);
    }

    return [...entriesOf(predicate)].every(([operatorKey, operatorValue]) => parseOperator(operatorKey, operatorValue)(element));
  };
}
