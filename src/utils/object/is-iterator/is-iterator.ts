import { isFunction } from '../is-function/is-function';
import { isNil } from '../is-nil/is-nil';

export const isIterator = <T>(value: any): value is Iterator<T> =>
  !isNil(value) && isFunction(value[Symbol.iterator]) && value[Symbol.iterator].call(value) === value;
