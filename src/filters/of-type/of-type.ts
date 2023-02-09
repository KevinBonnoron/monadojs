import { Types } from '../../types';
import { isArray, isBoolean, isDate, isFunction, isMap, isNumber, isObject, isRegExp, isString, isSymbol } from '../../utils';

export const ofType =
  (type: Types) =>
  <T>(source: T) =>
    type === 'string'
      ? isString(source)
      : type === 'number'
      ? isNumber(source)
      : type === 'boolean'
      ? isBoolean(source)
      : type === 'symbol'
      ? isSymbol(source)
      : type === 'object'
      ? isObject(source)
      : type === 'function'
      ? isFunction(source)
      : type === 'array'
      ? isArray(source)
      : type === 'date'
      ? isDate(source)
      : type === 'map'
      ? isMap(source)
      : type === 'regexp'
      ? isRegExp(source)
      : false;
