import { prop } from '../../mappers';
import { identity } from '../../operators';
import type { Operator, Sorter } from '../../types';
import { compare, isFunction, isPropertyKey, type SorterOptions, ɵsorter } from '../../utils';

export function desc<T>(options?: SorterOptions): Sorter<T>;
export function desc<T>(predicate: keyof T, options?: SorterOptions): Sorter<T>;
export function desc<T, S>(predicate: Operator<T, S>, options?: SorterOptions): Sorter<T>;
export function desc<T>(predicate?: keyof T | Operator | SorterOptions, options?: SorterOptions): Sorter<T> {
  let operator: Operator;
  let descOptions = options;
  if (isPropertyKey(predicate)) {
    operator = prop(predicate);
  } else if (isFunction(predicate)) {
    operator = predicate;
  } else {
    operator = identity();
    descOptions = predicate;
  }

  // We flip the `nullsAs` options for desc (on a copy, never mutate the caller's object)
  if (descOptions?.nullsAs) {
    descOptions = { ...descOptions, nullsAs: descOptions.nullsAs === 'first' ? 'last' : 'first' };
  }

  return ɵsorter((a: T, b: T) => compare(descOptions)(operator(b), operator(a)));
}
