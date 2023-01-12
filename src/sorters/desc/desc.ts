import { prop } from '../../mappers';
import { identity } from '../../operators';
import { Operator, Sorter } from '../../types';
import { compare, isFunction, isPropertyKey, sorter, SorterOptions } from '../../utils';

export function desc<T>(options?: SorterOptions): Sorter<T>;
export function desc<T>(predicate: keyof T, options?: SorterOptions): Sorter<T>;
export function desc<T, S>(predicate: Operator<T, S>, options?: SorterOptions): Sorter<T>;
export function desc<T>(predicate?: keyof T | Operator | SorterOptions, options?: SorterOptions): Sorter<T> {
  let operator: Operator;
  if (isPropertyKey(predicate)) {
    operator = prop(predicate);
  } else if (isFunction(predicate)) {
    operator = predicate;
  } else {
    operator = identity();
    options = predicate;
  }

  // We flip the `nullsAs` options for desc as we want to ignore
  if (options?.nullsAs) {
    options.nullsAs = options.nullsAs === 'first' ? 'last' : 'first';
  }

  return sorter((a: T, b: T) => compare(operator(b), operator(a), options));
}
