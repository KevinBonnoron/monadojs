import { isDate } from '../is-date/is-date';
import { isNumber } from '../is-number/is-number';
import { isString } from '../is-string/is-string';

/**
 * Convert a value to Date
 *
 * @param value
 * @returns
 */
export function toDate(value: unknown): Date {
  return isString(value) || isNumber(value) || isDate(value) ? new Date(value) : new Date(Number.NaN);
}
