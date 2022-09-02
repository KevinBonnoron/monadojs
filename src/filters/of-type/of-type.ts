import { Filter } from '../../types';
import { isArray, isBoolean, isFunction, isNumber, isObject, isString, isSymbol } from '../../utils';

export const ofType =
  <T>(type: 'string' | 'number' | 'boolean' | 'symbol' | 'array' | 'function' | 'object'): Filter<T> =>
  (value: T) =>
    type === 'string' ? isString(value) : type === 'number' ? isNumber(value) : type === 'boolean' ? isBoolean(value) : type === 'symbol' ? isSymbol(value) : type === 'array' ? isArray(value) : type === 'function' ? isFunction(value) : type === 'object' ? isObject(value) : false;
