import { nil } from '../../../types';
import { isNull } from '../is-null/is-null';
import { isUndefined } from '../is-undefined/is-undefined';

/**
 * Type guard for `value === null || value === undefined`
 *
 * @param value
 * @returns boolean
 */
export function isNil(value: unknown): value is nil {
  return value === nil || isNull(value) || isUndefined(value);
}
