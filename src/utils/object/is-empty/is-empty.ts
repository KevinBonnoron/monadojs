import { NoUndefinedField } from '../../../types';
import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isDate } from '../is-date/is-date';
import { isFunction } from '../is-function/is-function';
import { isNil } from '../is-nil/is-nil';
import { isObject } from '../is-object/is-object';
import { isPrimitive } from '../is-primitive/is-primitive';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';
import { isString } from '../is-string/is-string';

/**
 * Check if passed `value` is empty.
 *
 * Return true for :
 * - ''
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
    : isString(value)
    ? value.length === 0
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
