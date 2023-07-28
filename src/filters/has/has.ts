import { isMap, propIn } from '../../utils';

/**
 * Return true if `source` has the `key`.
 *
 * Note: It can return true only on Map or PlainObject.
 * @param key
 * @returns boolean
 */
export const has = <K>(key: K) => <S>(source: S) => isMap<K, S>(source) ? source.has(key) : propIn(source, key as keyof S);
