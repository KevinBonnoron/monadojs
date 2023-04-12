import { AllTypes, Collection } from '../../types';
import { isArray } from './is-array/is-array';
import { isBoolean } from './is-boolean/is-boolean';
import { isDate } from './is-date/is-date';
import { isEqual } from './is-equal/is-equal';
import { isMap } from './is-map/is-map';
import { isNil } from './is-nil/is-nil';
import { isNumber } from './is-number/is-number';
import { isObject } from './is-object/is-object';
import { isSet } from './is-set/is-set';
import { isString } from './is-string/is-string';
import { isSymbol } from './is-symbol/is-symbol';

export const toNull = (_value: unknown) => null;
export const toUndefined = (_value: unknown) => undefined;
export const toString = (value: unknown) => (isSymbol(value) ? 'Symbol' : `${value}`);
export const toNumber = (value: unknown) => (isSymbol(value) ? NaN : parseInt(value as string));
export const toBoolean = (value: unknown) => (isNumber(value) ? value !== 0 : isArray(value) ? value.length > 0 : !isNil(value));
export const toSymbol = (_value: unknown) => Symbol();
export const toDate = (value: unknown) => (isString(value) || isNumber(value) || isDate(value) ? new Date(value) : new Date(NaN));
export const toRegExp = (value: unknown) => new RegExp(value as string | RegExp);
export const toArray = (value: unknown) => [value];
export const toFunction = (value: unknown) => () => value;
export const castTo = (type: AllTypes) => (value: unknown) =>
  type === null
    ? toNull(value)
    : type === undefined
    ? toUndefined(value)
    : type === String
    ? toString(value)
    : type === Number
    ? toNumber(value)
    : type === Boolean
    ? toBoolean(value)
    : type === Symbol
    ? toSymbol(value)
    : type === Date
    ? toDate(value)
    : type === RegExp
    ? toRegExp(value)
    : type === Array
    ? toArray(value)
    : type === Function
    ? toFunction(value)
    : value;

export const getTypeDefault = (value: unknown) =>
  isString(value)
    ? ''
    : isNumber(value)
    ? 0
    : isBoolean(value)
    ? false
    : isArray(value)
    ? []
    : isDate(value)
    ? new Date()
    : isMap(value)
    ? new Map()
    : isSet(value)
    ? new Set()
    : isObject(value)
    ? {}
    : null;

export const TRUE = () => true;
export const FALSE = () => false;
export const STRICT_EQUALITY = (a: any, b: any) => a === b;
export const LOOSE_EQUALITY = (a: any, b: any) => a == b;

export const isFirst = <T>(value: T, values: T[]) => isEqual(value, values[0]);
export const isLast = <T>(value: T, values: T[]) => isEqual(value, values[values.length - 1]);

export const ɵcopyCollection = (collection: Collection, values: any) =>
  isArray(collection) ? [...values] : isSet(collection) ? new Set(values) : new Map(values);
