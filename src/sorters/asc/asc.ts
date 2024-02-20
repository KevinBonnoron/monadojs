import { prop } from '../../mappers';
import { identity } from '../../operators';
import { Operator, Sorter } from '../../types';
import { SorterOptions, compare, isFunction, isPropertyKey, ɵsorter } from '../../utils';

export function asc<T>(options?: SorterOptions): Sorter<T>;
export function asc<T>(predicate: keyof T, options?: SorterOptions): Sorter<T>;
export function asc<T, S>(predicate: Operator<T, S>, options?: SorterOptions): Sorter<T>;
export function asc<T>(predicate?: keyof T | Operator | SorterOptions, options?: SorterOptions): Sorter<T> {
  let operator: Operator;
  let opts = options;
  if (isPropertyKey(predicate)) {
    operator = prop(predicate);
  } else if (isFunction(predicate)) {
    operator = predicate;
  } else {
    operator = identity();
    opts = predicate;
  }

  return ɵsorter((a: T, b: T) => compare(opts)(operator(a), operator(b)));
}
