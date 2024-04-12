import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';
import { isNumber } from '../is-number/is-number';

/**
 * Convert value to boolean
 *
 * @param value
 * @returns
 */
export function toBoolean(value: unknown): boolean {
  return isNumber(value) ? value !== 0 : isArray(value) ? value.length > 0 : !isNil(value);
}
