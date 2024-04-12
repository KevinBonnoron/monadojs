import type { Maybe } from '../../../types';
import { Just } from '../../maybe/maybe.utils';
import { isMaybe } from '../is-maybe/is-maybe';

/**
 * Convert a value to Maybe
 *
 * @param value
 * @returns
 */
export function toMaybe<V = unknown>(value: V): Maybe<V> {
  return isMaybe(value) ? value : Just(value);
}
