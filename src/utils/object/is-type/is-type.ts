import { AllTypes, Maybe } from '../../../types';
import { isArray } from '../is-array/is-array';
import { isBoolean } from '../is-boolean/is-boolean';
import { isDate } from '../is-date/is-date';
import { isFunction } from '../is-function/is-function';
import { isMap } from '../is-map/is-map';
import { isMaybe } from '../is-maybe/is-maybe';
import { isNull } from '../is-null/is-null';
import { isNumber } from '../is-number/is-number';
import { isObject } from '../is-object/is-object';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';
import { isString } from '../is-string/is-string';
import { isSymbol } from '../is-symbol/is-symbol';
import { isUndefined } from '../is-undefined/is-undefined';

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
