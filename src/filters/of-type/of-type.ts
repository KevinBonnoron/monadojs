import { Types } from '../../types';
import { isArray, isBoolean, isDate, isFunction, isMap, isNumber, isObject, isRegExp, isString, isSymbol } from '../../utils';

export const ofType =
  (type: Types) =>
  <T>(value: T) =>
    type === 'string' ? isString(value) : type === 'number' ? isNumber(value) : type === 'boolean' ? isBoolean(value) : type === 'symbol' ? isSymbol(value) : type === 'object' ? isObject(value) : type === 'function' ? isFunction(value) : type === 'array' ? isArray(value) : type === 'date' ? isDate(value) : type === 'map' ? isMap(value) : type === 'regexp' ? isRegExp(value) : false;
