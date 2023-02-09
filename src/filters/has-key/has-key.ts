import { isMap, isObject } from '../../utils';

/**
 * Return true if `source` has the `key`.
 *
 * Note: It can return true only on Map or object.
 * @param key
 * @returns boolean
 */
export const hasKey =
  <K>(key: K) =>
  <T>(source: T) =>
    isMap<K, T>(source) ? source.has(key) : isObject(source) ? source[key as keyof T] : false;
