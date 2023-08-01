import { isMap } from '../../utils/object/is-map/is-map';
import { propIn } from '../../utils/object/prop-in/prop-in';

/**
 * Return true if `source` has the `key`.
 *
 * Note: It can return true only on Map or PlainObject.
 * @param key
 * @returns boolean
 */
export const has = <K>(key: K) => <S>(source: S) => isMap<K, S>(source) ? source.has(key) : propIn(source, key as keyof S);
