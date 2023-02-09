import { isMap, isObject } from '../../utils';

/**
 * Return the corresponding `property` of the `source` (for Map the corresponding key is used).
 * If `property` is not found, or the `source` is not a json object or a Map, then `defaultValue` is returned
 * @param property
 * @param defaultValue
 * @returns any
 */
export const prop =
  <T extends object = any, P extends keyof T = any>(property: P, defaultValue?: any) =>
  (source: T) =>
    isMap(source) ? source.get(property) ?? defaultValue : isObject(source) ? source[property] ?? defaultValue : defaultValue;
