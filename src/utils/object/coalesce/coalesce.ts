import type { nil } from '../../../types';
import { isNil } from '../is-nil/is-nil';

type FirstNonNil<T extends unknown[]> = T extends [infer F, ...infer R] ? (F extends nil ? FirstNonNil<R> : F) : never;

export function coalesce<S extends unknown[]>(...values: S): FirstNonNil<S>;
export function coalesce(...values: unknown[]) {
  return values.find((value) => !isNil(value));
}
