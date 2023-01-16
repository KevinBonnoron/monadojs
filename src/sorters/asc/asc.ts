import { prop } from '../../mappers';
import { identity } from '../../operators';
import { Operator, Sorter } from '../../types';
import { compare, isFunction, isPropertyKey, SorterOptions, ɵsorter } from '../../utils';

export function asc<T>(options?: SorterOptions): Sorter<T>;
export function asc<T>(predicate: keyof T, options?: SorterOptions): Sorter<T>;
export function asc<T, S>(predicate: Operator<T, S>, options?: SorterOptions): Sorter<T>;
export function asc<T>(predicate?: keyof T | Operator | SorterOptions, options?: SorterOptions): Sorter<T> {
  let operator: Operator;
  if (isPropertyKey(predicate)) {
    operator = prop(predicate);
  } else if (isFunction(predicate)) {
    operator = predicate;
  } else {
    operator = identity();
    options = predicate;
  }

  return ɵsorter((a: T, b: T) => compare(options)(operator(a), operator(b)));
}
