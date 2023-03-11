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
  <S>(source: S) =>
    isMap<K, S>(source) ? source.has(key) : isObject(source) ? source[key as keyof S] : false;
