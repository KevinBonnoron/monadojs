import { isArray } from './is-array/is-array';
import { isBoolean } from './is-boolean/is-boolean';
import { isDate } from './is-date/is-date';
import { isMap } from './is-map/is-map';
import { isNumber } from './is-number/is-number';
import { isObject } from './is-object/is-object';
import { isSet } from './is-set/is-set';
import { isString } from './is-string/is-string';

export const getTypeDefault = (value: unknown) => (isString(value) ? '' : isNumber(value) ? 0 : isBoolean(value) ? false : isArray(value) ? [] : isDate(value) ? new Date() : isMap(value) ? new Map() : isSet(value) ? new Set() : isObject(value) ? {} : null);

export const TRUE = () => true;
export const FALSE = () => false;
export const STRICT_EQUALITY = (a: unknown, b: unknown) => a === b;
// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
export const LOOSE_EQUALITY = (a: unknown, b: unknown) => a == b;
