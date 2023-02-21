import { isMap, isObject } from '../../utils';

type PropertyType<S, P extends PropertyKey> = S extends Record<P, infer O> ? O : never;

/**
 * Return the corresponding `property` of the `source` (for Map the corresponding key is used).
 * If `property` is not found, or the `source` is not a json object or a Map, then `defaultValue` is returned
 * @param property
 * @param defaultValue
 * @returns any
 */
export function prop<S, P extends keyof S>(property: P, defaultValue?: any): (source: S) => S[P];
export function prop<P extends PropertyKey>(property: P, defaultValue?: any): <S, O = PropertyType<S, P>>(source: S) => O;
export function prop(property: unknown, defaultValue?: unknown) {
  return (source: unknown) =>
    isMap(source) ? source.get(property) ?? defaultValue : isObject(source) ? source[property as keyof typeof source] ?? defaultValue : defaultValue;
}
