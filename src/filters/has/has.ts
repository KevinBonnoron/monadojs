import type { Operator } from '../../types';
import { isMap } from '../../utils/object/is-map/is-map';
import { propIn } from '../../utils/object/prop-in/prop-in';

/**
 * Return true if `source` has the `key`.
 *
 * Note: It can return true only on Map or PlainObject.
 * @param key
 * @returns boolean
 */
export function has<I extends Map<unknown, unknown> | Record<PropertyKey, unknown>, K extends PropertyKey>(key: K): Operator<I, boolean> {
  return <S extends I>(source: S) => (isMap<K, S>(source) ? source.has(key) : propIn(source, key as keyof S));
}
