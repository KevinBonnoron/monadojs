import { isFunction } from '../is-function/is-function';
import { isNil } from '../is-nil/is-nil';

export function isIterable<T>(value: unknown): value is Iterable<T> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return !isNil(value) && isFunction((value as any)[Symbol.iterator]);
}
