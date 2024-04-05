import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';
import { isNumber } from '../is-number/is-number';

export const toBoolean = (value: unknown): boolean => (isNumber(value) ? value !== 0 : isArray(value) ? value.length > 0 : !isNil(value));
