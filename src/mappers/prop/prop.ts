import { isMap, isObject } from '../../utils';

type Getter<S, P> = (source: S) => P extends keyof S ? S[P] : never;
type PropertyType<S, P extends PropertyKey> = S extends Record<P, infer O> ? O : never;

/**
 * Return the corresponding `property` of the `source` (for Map the corresponding key is used).
 * If `property` is not found, or the `source` is not a json object or a Map, then `defaultValue` is returned
 * @param property
 * @param defaultValue
 * @returns any
 */
export function prop<P extends keyof S, S>(property: P, defaultValue?: any): Getter<S, P>;
export function prop<P extends PropertyKey>(property: P, defaultValue?: any): <S extends object, O = PropertyType<S, P>>(source: S) => O;
export function prop(property: unknown, defaultValue?: unknown) {
  return (source: any) =>
    isMap(source) ? source.get(property) ?? defaultValue : isObject(source) ? source[property as keyof typeof source] ?? defaultValue : defaultValue;
}
