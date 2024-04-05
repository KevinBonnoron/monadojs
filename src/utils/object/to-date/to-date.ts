import { isDate } from '../is-date/is-date';
import { isNumber } from '../is-number/is-number';
import { isString } from '../is-string/is-string';

export const toDate = (value: unknown): Date => (isString(value) || isNumber(value) || isDate(value) ? new Date(value) : new Date(NaN));
