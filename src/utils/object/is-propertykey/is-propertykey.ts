import { isNumber } from '../is-number/is-number';
import { isString } from '../is-string/is-string';
import { isSymbol } from '../is-symbol/is-symbol';

export const isPropertyKey = (value: unknown): value is PropertyKey => isString(value) || isNumber(value) || isSymbol(value);
