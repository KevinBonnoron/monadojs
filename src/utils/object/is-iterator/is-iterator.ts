import { isFunction } from '../is-function/is-function';
import { isNil } from '../is-nil/is-nil';
import { isPlainObject } from '../is-plain-object/is-plain-object';

export function isIterator<T>(value: unknown): value is Iterator<T> {
  return isPlainObject(value) && Symbol.iterator in value && !isNil(value[Symbol.iterator]) && isFunction(value[Symbol.iterator]) && (value[Symbol.iterator] as () => IterableIterator<unknown>).call(value) === value;
}
