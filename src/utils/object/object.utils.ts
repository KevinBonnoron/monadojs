import { AllTypes, AnyFunction, Collection, Maybe, nil, NoUndefinedField, Primitive } from '../../types';

/**
 * Type guard for `value === null`
 * @param value
 * @returns boolean
 */
export const isNull = (value: any): value is null => value === null;
/**
 * Type guard for `value === undefined`
 * @param value
 * @returns boolean
 */
export const isUndefined = (value: any): value is undefined => value === undefined;
/**
 * Type guard for `value === null || value === undefined`
 * @param value
 * @returns boolean
 */
export const isNil = (value: any): value is nil => isNull(value) || isUndefined(value);
/**
 * Type guard for `typeof value === 'string'`
 * @param value
 * @returns boolean
 */
export const isString = (value: any): value is string => typeof value === 'string';
/**
 * Type guard for `typeof value === 'number'`
 * @param value
 * @returns boolean
 */
export const isNumber = (value: any): value is number => typeof value === 'number';
/**
 * Type guard for `typeof value === 'boolean'`
 * @param value
 * @returns boolean
 */
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';
/**
 * Type guard for `value === true`
 * @param value
 * @returns boolean
 */
export const isTrue = (value: any): value is true => value === true;
/**
 * Type guard for `value === false`
 * @param value
 * @returns boolean
 */
export const isFalse = (value: any): value is false => value === false;
/**
 * Type guard for `typeof value === 'symbol'`
 * @param value
 * @returns boolean
 */
export const isSymbol = (value: any): value is symbol => typeof value === 'symbol';
/**
 * Type guard for `value instanceof Promise`
 * @param value
 * @returns
 */
export const isPromise = <T>(value: any): value is Promise<T> => value instanceof Promise;
/**
 * Type guard for `value instanceof Date`
 * @param value
 * @returns boolean
 */
export const isDate = (value: any): value is Date => value instanceof Date;
/**
 * Type guard for `typeof value === 'function'`
 * @param value
 * @returns boolean
 */
export const isFunction = (value: any): value is AnyFunction => typeof value === 'function';
export const isRegExp = (value: any): value is RegExp => Object.prototype.toString.call(value) === '[object RegExp]';
export const isPropertyKey = (value: any): value is PropertyKey => isString(value) || isNumber(value) || isSymbol(value);
export const isPrimitive = (value: any): value is Primitive => isPropertyKey(value) || isBoolean(value);
export const isMap = <K, V>(value: any): value is Map<K, V> => value instanceof Map;
export const isSet = <V>(value: any): value is Set<V> => value instanceof Set;
export const isCollection = <V, K = any>(value: any): value is Collection<V, K> => isMap<K, V>(value) || isSet<V>(value);
export const isArray = <T>(value: any): value is T[] => Array.isArray(value);
/**
 * Type guard for value && `typeof value === 'object' && !Array.isArray(value)
 * @param value
 * @returns boolean
 */
export const isObject = <T>(value: any): value is T & object => !isNil(value) && typeof value === 'object' && !isArray(value);
export const isPlainObject = <T>(value: any): value is T & object => isObject(value) && !isDate(value) && !isRegExp(value) && !isCollection(value);

/**
 * Check if passed `value` is empty.
 *
 * Return true for :
 * - null,
 * - undefined,
 * - [],
 * - Invalid Date
 * - {}
 * @param value
 * @returns boolean
 */
export const isEmpty = <T>(value: any): value is Required<NoUndefinedField<T>> =>
  isNil(value)
    ? true
    : isPrimitive(value)
    ? false
    : isFunction(value)
    ? false
    : isArray(value)
    ? value.length === 0
    : isCollection(value)
    ? [...value].length === 0
    : isPromise(value)
    ? false
    : isDate(value)
    ? !isNaN(Number(value))
    : isRegExp(value)
    ? false
    : isObject(value)
    ? Object.keys(value).length === 0
    : false;
export const isEnum =
  <T extends object>(enumClass: T) =>
  (value: unknown): value is T[keyof T] =>
    Object.values(enumClass).includes(value);
export const isMaybe = (value: any): value is Maybe => hasProperties<Maybe>(value, 'pipe', 'isJust', 'isNothing', 'equals');
export const isType =
  <T>(type: AllTypes) =>
  (value: any): value is T =>
    type === null
      ? isNull(value)
      : type === undefined
      ? isUndefined(value)
      : type === String
      ? isString(value)
      : type === Number
      ? isNumber(value)
      : type === Boolean
      ? isBoolean(value)
      : type === Symbol
      ? isSymbol(value)
      : type === Promise
      ? isPromise(value)
      : type === Date
      ? isDate(value)
      : type === RegExp
      ? isRegExp(value)
      : type === Array
      ? isArray(value)
      : type === Map
      ? isMap(value)
      : type === Maybe
      ? isMaybe(value)
      : type === Object
      ? isObject(value)
      : type === Function
      ? isFunction(value)
      : value?.constructor === type;

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
export const toType = (type: AllTypes) => (value: unknown) =>
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

export const isEqual = <T, V>(o1: T, o2: V): boolean => {
  if (isArray(o1) && isArray(o2)) {
    return o1.length === o2.length && o1.every((value, index) => isEqual(value, o2[index]));
  }

  if (isMap(o1) && isMap(o2)) {
    return o1.size === o2.size && [...o1].every(([key, value]) => isEqual(value, o2.get(key)));
  }

  if (isSet(o1) && isSet(o2)) {
    return o1.size === o2.size && [...o1].every((value, index) => isEqual(value, [...o2][index]));
  }

  if (isDate(o1) && isDate(o2)) {
    return o1.getTime() === o2.getTime();
  }

  if (isPlainObject(o1) && isPlainObject(o2)) {
    return Object.keys(o1).length === Object.keys(o2).length && Object.entries(o1).every(([key, value]) => isEqual(value, o2[key as keyof V]));
  }

  return Object.is(o1, o2);
};
export const hasProperties = <T>(value: T, ...properties: (keyof T)[]) =>
  !isNil(value) && isObject(value) && properties.every((property) => property in value);
export const haveSameProperties = (o1: any, o2: any) => hasProperties(o2, ...Object.keys(o1)) && hasProperties(o1, ...Object.keys(o2));

export const haveSameType = <T, S>(o1: T, o2: S) =>
  isNil(o1)
    ? false
    : isNil(o2)
    ? false
    : isArray(o1) && !isArray(o2)
    ? false
    : !isArray(o1) && isArray(o2)
    ? false
    : isArray(o1) && isArray(o2)
    ? o1.length === o2.length && o1.every((value, index) => typeof value === typeof o2[index])
    : typeof o1 === typeof o2;

export const propertyIn = <T>(property: keyof T, value: unknown): value is T => !isUndefined((value as any)[property]);

export const coalesce = (...values: unknown[]) => values.find((value) => !isNil(value));

export const TRUE = () => true;
export const FALSE = () => false;
export const STRICT_EQUALITY = (a: any, b: any) => a === b;
export const LOOSE_EQUALITY = (a: any, b: any) => a == b;
