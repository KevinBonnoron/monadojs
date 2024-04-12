import { isMap, isPlainObject } from '../../utils';

/**
 * Return the corresponding `property` of the `source` (for Map the corresponding key is used).
 * If `property` is not found, or the `source` is not a json object or a Map, then `defaultValue` is returned
 * @param property
 * @param defaultValue
 * @returns any
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function prop<P extends PropertyKey>(property: P, defaultValue?: any): <S extends Record<P, unknown>>(source: S) => S[P] {
  return <S extends Record<P, unknown>>(source: S): S[P] => (isMap(source) ? source.get(property) ?? defaultValue : isPlainObject(source) ? source[property] ?? defaultValue : defaultValue);
}
