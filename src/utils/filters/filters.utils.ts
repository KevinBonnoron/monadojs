import { eq, gt, gte, iin, like, lt, lte, neq } from '../../filters';
import { Filter, FilterPropertyType } from '../../types';
import { isFunction } from '../object';
import { FALSE } from '../object/object.utils';

export const toFilterFn = (predicate: Filter | FilterPropertyType<unknown>): Filter => {
  let predicateFn = predicate;
  if (!isFunction(predicateFn)) {
    predicateFn = (element) => {
      return Object.entries(predicate).reduce((accumulator, [key, filterConfig]) => accumulator && Object.entries(filterConfig).every(([filterOp, filterValue]) => {
        const operator =
          filterOp === '$eq' ? eq(filterValue) :
          filterOp === '$neq' ? neq(filterValue) :
          filterOp === '$lt' ? lt(filterValue) :
          filterOp === '$lte' ? lte(filterValue) :
          filterOp === '$gt' ? gt(filterValue) :
          filterOp === '$gte' ? gte(filterValue) :
          filterOp === '$in' ? iin(filterValue as any) :
          filterOp === '$like' ? like(filterValue as RegExp) :
          FALSE
        ;

        return operator(element[key]);
      }), true);
    }
  }

  return predicateFn as Filter;
};