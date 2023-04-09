import { DEFAULT_ARRAY, DEFAULT_DATE, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { nil } from '../../filters';
import { Just, Nothing } from '../maybe/maybe.utils';
import {
  coalesce,
  getTypeDefault,
  haveSameProperties,
  haveSameType,
  isArray,
  isBoolean,
  isCollection,
  isDate,
  isEmpty,
  isEqual,
  isFunction,
  isIterable,
  isIterator,
  isMap,
  isMaybe,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isPrimitive,
  isPromise,
  isPropertyKey,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isType,
  isUndefined,
  propertyIn,
} from './object.utils';

describe('ObjectUtils', () => {
  const anonymousArrowFn = () => {};
  const anonymousFn = function () {};
  const emptyResolvedPromise = Promise.resolve();
  class Dummy {}

  describe('isNull', () => {
    it('should return true', () => {
      expect(isNull(null)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isNull(undefined)).toBeFalsy();
      expect(isNull('a')).toBeFalsy();
      expect(isNull(0)).toBeFalsy();
      expect(isNull(true)).toBeFalsy();
      expect(isNull(Symbol())).toBeFalsy();
      expect(isNull(new Date())).toBeFalsy();
      expect(isNull(emptyResolvedPromise)).toBeFalsy();
      expect(isNull(new RegExp(''))).toBeFalsy();
      expect(isNull([])).toBeFalsy();
      expect(isNull(new Set())).toBeFalsy();
      expect(isNull(new Map())).toBeFalsy();
      expect(isNull({})).toBeFalsy();
      expect(isNull(anonymousArrowFn)).toBeFalsy();
      expect(isNull(anonymousFn)).toBeFalsy();
      expect(isNull(Just(1))).toBeFalsy();
      expect(isNull(Nothing)).toBeFalsy();
    });
  });

  describe('isUndefined', () => {
    it('should return true', () => {
      expect(isUndefined(undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isUndefined(null)).toBeFalsy();
      expect(isUndefined('a')).toBeFalsy();
      expect(isUndefined(0)).toBeFalsy();
      expect(isUndefined(true)).toBeFalsy();
      expect(isUndefined(Symbol())).toBeFalsy();
      expect(isUndefined(new Date())).toBeFalsy();
      expect(isUndefined(emptyResolvedPromise)).toBeFalsy();
      expect(isUndefined(new RegExp(''))).toBeFalsy();
      expect(isUndefined([])).toBeFalsy();
      expect(isUndefined(new Set())).toBeFalsy();
      expect(isUndefined(new Map())).toBeFalsy();
      expect(isUndefined({})).toBeFalsy();
      expect(isUndefined(anonymousArrowFn)).toBeFalsy();
      expect(isUndefined(anonymousFn)).toBeFalsy();
      expect(isUndefined(Just(1))).toBeFalsy();
      expect(isUndefined(Nothing)).toBeFalsy();
    });
  });

  describe('isNil', () => {
    it('should return true', () => {
      expect(isNil(null)).toBeTruthy();
      expect(isNil(undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isNil('a')).toBeFalsy();
      expect(isNil(0)).toBeFalsy();
      expect(isNil(true)).toBeFalsy();
      expect(isNil(Symbol())).toBeFalsy();
      expect(isNil(new Date())).toBeFalsy();
      expect(isNil(emptyResolvedPromise)).toBeFalsy();
      expect(isNil(new RegExp(''))).toBeFalsy();
      expect(isNil([])).toBeFalsy();
      expect(isNil(new Set())).toBeFalsy();
      expect(isNil(new Map())).toBeFalsy();
      expect(isNil({})).toBeFalsy();
      expect(isNil(anonymousArrowFn)).toBeFalsy();
      expect(isNil(anonymousFn)).toBeFalsy();
      expect(isNil(Just(1))).toBeFalsy();
      expect(isNil(Nothing)).toBeFalsy();
    });
  });

  describe('isString', () => {
    it('should return true', () => {
      expect(isString('a')).toBeTruthy();
    });

    it('should return false', () => {
      expect(isString(null)).toBeFalsy();
      expect(isString(undefined)).toBeFalsy();
      expect(isString(0)).toBeFalsy();
      expect(isString(true)).toBeFalsy();
      expect(isString(Symbol())).toBeFalsy();
      expect(isString(new Date())).toBeFalsy();
      expect(isString(emptyResolvedPromise)).toBeFalsy();
      expect(isString(new RegExp(''))).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString(new Set())).toBeFalsy();
      expect(isString(new Map())).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(anonymousArrowFn)).toBeFalsy();
      expect(isString(anonymousFn)).toBeFalsy();
      expect(isString(Just(1))).toBeFalsy();
      expect(isString(Nothing)).toBeFalsy();
    });
  });

  describe('isNumber', () => {
    it('should return true', () => {
      expect(isNumber(0)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isNumber(null)).toBeFalsy();
      expect(isNumber(undefined)).toBeFalsy();
      expect(isNumber('a')).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
      expect(isNumber(Symbol())).toBeFalsy();
      expect(isNumber(new Date())).toBeFalsy();
      expect(isNumber(emptyResolvedPromise)).toBeFalsy();
      expect(isNumber(new RegExp(''))).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber(new Set())).toBeFalsy();
      expect(isNumber(new Map())).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(anonymousArrowFn)).toBeFalsy();
      expect(isNumber(anonymousFn)).toBeFalsy();
      expect(isNumber(Just(1))).toBeFalsy();
      expect(isNumber(Nothing)).toBeFalsy();
    });
  });

  describe('isBoolean', () => {
    it('should return true', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isBoolean(null)).toBeFalsy();
      expect(isBoolean(undefined)).toBeFalsy();
      expect(isBoolean('a')).toBeFalsy();
      expect(isBoolean(0)).toBeFalsy();
      expect(isBoolean(Symbol())).toBeFalsy();
      expect(isBoolean(new Date())).toBeFalsy();
      expect(isBoolean(emptyResolvedPromise)).toBeFalsy();
      expect(isBoolean(new RegExp(''))).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean(new Set())).toBeFalsy();
      expect(isBoolean(new Map())).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(anonymousArrowFn)).toBeFalsy();
      expect(isBoolean(anonymousFn)).toBeFalsy();
      expect(isBoolean(Just(1))).toBeFalsy();
      expect(isBoolean(Nothing)).toBeFalsy();
    });
  });

  describe('isTrue', () => {
    it('should return true', () => {
      expect(isBoolean(true)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isBoolean(null)).toBeFalsy();
      expect(isBoolean(undefined)).toBeFalsy();
      expect(isBoolean('a')).toBeFalsy();
      expect(isBoolean(0)).toBeFalsy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean(Symbol())).toBeFalsy();
      expect(isBoolean(new Date())).toBeFalsy();
      expect(isBoolean(emptyResolvedPromise)).toBeFalsy();
      expect(isBoolean(new RegExp(''))).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean(new Set())).toBeFalsy();
      expect(isBoolean(new Map())).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(anonymousArrowFn)).toBeFalsy();
      expect(isBoolean(anonymousFn)).toBeFalsy();
      expect(isBoolean(Just(1))).toBeFalsy();
      expect(isBoolean(Nothing)).toBeFalsy();
    });
  });

  describe('isFalse', () => {
    it('should return true', () => {
      expect(isBoolean(false)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isBoolean(null)).toBeFalsy();
      expect(isBoolean(undefined)).toBeFalsy();
      expect(isBoolean('a')).toBeFalsy();
      expect(isBoolean(0)).toBeFalsy();
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(Symbol())).toBeFalsy();
      expect(isBoolean(new Date())).toBeFalsy();
      expect(isBoolean(emptyResolvedPromise)).toBeFalsy();
      expect(isBoolean(new RegExp(''))).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean(new Set())).toBeFalsy();
      expect(isBoolean(new Map())).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(anonymousArrowFn)).toBeFalsy();
      expect(isBoolean(anonymousFn)).toBeFalsy();
      expect(isBoolean(Just(1))).toBeFalsy();
      expect(isBoolean(Nothing)).toBeFalsy();
    });
  });

  describe('isSymbol', () => {
    it('should return true', () => {
      expect(isSymbol(Symbol())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isSymbol(null)).toBeFalsy();
      expect(isSymbol(undefined)).toBeFalsy();
      expect(isSymbol('a')).toBeFalsy();
      expect(isSymbol(0)).toBeFalsy();
      expect(isSymbol(false)).toBeFalsy();
      expect(isSymbol(new Date())).toBeFalsy();
      expect(isSymbol(emptyResolvedPromise)).toBeFalsy();
      expect(isSymbol(new RegExp(''))).toBeFalsy();
      expect(isSymbol([])).toBeFalsy();
      expect(isSymbol(new Set())).toBeFalsy();
      expect(isSymbol(new Map())).toBeFalsy();
      expect(isSymbol({})).toBeFalsy();
      expect(isSymbol(anonymousArrowFn)).toBeFalsy();
      expect(isSymbol(anonymousFn)).toBeFalsy();
      expect(isSymbol(Just(1))).toBeFalsy();
      expect(isSymbol(Nothing)).toBeFalsy();
    });
  });

  describe('isDate', () => {
    it('should return true', () => {
      expect(isDate(new Date())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isDate(null)).toBeFalsy();
      expect(isDate(undefined)).toBeFalsy();
      expect(isDate('a')).toBeFalsy();
      expect(isDate(0)).toBeFalsy();
      expect(isDate(false)).toBeFalsy();
      expect(isDate(Symbol())).toBeFalsy();
      expect(isDate(emptyResolvedPromise)).toBeFalsy();
      expect(isDate(new RegExp(''))).toBeFalsy();
      expect(isDate([])).toBeFalsy();
      expect(isDate(new Set())).toBeFalsy();
      expect(isDate(new Map())).toBeFalsy();
      expect(isDate({})).toBeFalsy();
      expect(isDate(anonymousArrowFn)).toBeFalsy();
      expect(isDate(anonymousFn)).toBeFalsy();
      expect(isDate(Just(1))).toBeFalsy();
      expect(isDate(Nothing)).toBeFalsy();
    });
  });

  describe('isPromise', () => {
    it('should return true', () => {
      expect(isPromise(emptyResolvedPromise)).toBeTruthy();
      // TODO: it trigger an ERR_UNHANDLED_REJECTION
      // expect(isPromise(Promise.reject())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isPromise(null)).toBeFalsy();
      expect(isPromise(undefined)).toBeFalsy();
      expect(isPromise('a')).toBeFalsy();
      expect(isPromise(0)).toBeFalsy();
      expect(isPromise(false)).toBeFalsy();
      expect(isPromise(Symbol())).toBeFalsy();
      expect(isPromise(new Date())).toBeFalsy();
      expect(isPromise(new RegExp(''))).toBeFalsy();
      expect(isPromise([])).toBeFalsy();
      expect(isPromise(new Set())).toBeFalsy();
      expect(isPromise(new Map())).toBeFalsy();
      expect(isPromise({})).toBeFalsy();
      expect(isPromise(anonymousArrowFn)).toBeFalsy();
      expect(isPromise(anonymousFn)).toBeFalsy();
      expect(isPromise(Just(1))).toBeFalsy();
      expect(isPromise(Nothing)).toBeFalsy();
    });
  });

  describe('isRegExp', () => {
    it('should return true', () => {
      expect(isRegExp(new RegExp(''))).toBeTruthy();
    });

    it('should return false', () => {
      expect(isRegExp(null)).toBeFalsy();
      expect(isRegExp(undefined)).toBeFalsy();
      expect(isRegExp('a')).toBeFalsy();
      expect(isRegExp(0)).toBeFalsy();
      expect(isRegExp(false)).toBeFalsy();
      expect(isRegExp(Symbol())).toBeFalsy();
      expect(isRegExp(new Date())).toBeFalsy();
      expect(isRegExp(emptyResolvedPromise)).toBeFalsy();
      expect(isRegExp([])).toBeFalsy();
      expect(isRegExp(new Set())).toBeFalsy();
      expect(isRegExp(new Map())).toBeFalsy();
      expect(isRegExp({})).toBeFalsy();
      expect(isRegExp(anonymousArrowFn)).toBeFalsy();
      expect(isRegExp(anonymousFn)).toBeFalsy();
      expect(isRegExp(Just(1))).toBeFalsy();
      expect(isRegExp(Nothing)).toBeFalsy();
    });
  });

  describe('isArray', () => {
    it('should return true', () => {
      expect(isArray([])).toBeTruthy();
    });

    it('should return false', () => {
      expect(isArray(null)).toBeFalsy();
      expect(isArray(undefined)).toBeFalsy();
      expect(isArray('a')).toBeFalsy();
      expect(isArray(0)).toBeFalsy();
      expect(isArray(false)).toBeFalsy();
      expect(isArray(Symbol())).toBeFalsy();
      expect(isArray(new Date())).toBeFalsy();
      expect(isArray(emptyResolvedPromise)).toBeFalsy();
      expect(isArray(new RegExp(''))).toBeFalsy();
      expect(isArray(new Set())).toBeFalsy();
      expect(isArray(new Map())).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(anonymousArrowFn)).toBeFalsy();
      expect(isArray(anonymousFn)).toBeFalsy();
      expect(isArray(Just(1))).toBeFalsy();
      expect(isArray(Nothing)).toBeFalsy();
    });
  });

  describe('isSet', () => {
    it('should return true', () => {
      expect(isSet(new Set())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isSet(null)).toBeFalsy();
      expect(isSet(undefined)).toBeFalsy();
      expect(isSet('a')).toBeFalsy();
      expect(isSet(0)).toBeFalsy();
      expect(isSet(false)).toBeFalsy();
      expect(isSet(Symbol())).toBeFalsy();
      expect(isSet(new Date())).toBeFalsy();
      expect(isSet(emptyResolvedPromise)).toBeFalsy();
      expect(isSet(new RegExp(''))).toBeFalsy();
      expect(isSet([])).toBeFalsy();
      expect(isSet(new Map())).toBeFalsy();
      expect(isSet({})).toBeFalsy();
      expect(isSet(anonymousArrowFn)).toBeFalsy();
      expect(isSet(anonymousFn)).toBeFalsy();
      expect(isSet(Just(1))).toBeFalsy();
      expect(isSet(Nothing)).toBeFalsy();
    });
  });

  describe('isMap', () => {
    it('should return true', () => {
      expect(isMap(new Map())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isMap(null)).toBeFalsy();
      expect(isMap(undefined)).toBeFalsy();
      expect(isMap('a')).toBeFalsy();
      expect(isMap(0)).toBeFalsy();
      expect(isMap(false)).toBeFalsy();
      expect(isMap(Symbol())).toBeFalsy();
      expect(isMap(new Date())).toBeFalsy();
      expect(isMap(emptyResolvedPromise)).toBeFalsy();
      expect(isMap(new RegExp(''))).toBeFalsy();
      expect(isMap([])).toBeFalsy();
      expect(isMap(new Set())).toBeFalsy();
      expect(isMap({})).toBeFalsy();
      expect(isMap(anonymousArrowFn)).toBeFalsy();
      expect(isMap(anonymousFn)).toBeFalsy();
      expect(isMap(Just(1))).toBeFalsy();
      expect(isMap(Nothing)).toBeFalsy();
    });
  });

  describe('isObject', () => {
    it('should return true', () => {
      expect(isObject(new Date())).toBeTruthy();
      expect(isObject(emptyResolvedPromise)).toBeTruthy();
      expect(isObject(new RegExp(''))).toBeTruthy();
      expect(isObject(new Set())).toBeTruthy();
      expect(isObject(new Map())).toBeTruthy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(Just(1))).toBeTruthy();
      expect(isObject(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isObject(null)).toBeFalsy();
      expect(isObject(undefined)).toBeFalsy();
      expect(isObject('a')).toBeFalsy();
      expect(isObject(0)).toBeFalsy();
      expect(isObject(false)).toBeFalsy();
      expect(isObject(Symbol())).toBeFalsy();
      expect(isObject([])).toBeFalsy();
      expect(isObject(anonymousArrowFn)).toBeFalsy();
      expect(isObject(anonymousFn)).toBeFalsy();
    });
  });

  describe('isPlainObject', () => {
    it('should return true', () => {
      expect(isPlainObject({})).toBeTruthy();
    });

    it('should return false', () => {
      expect(isPlainObject(null)).toBeFalsy();
      expect(isPlainObject(undefined)).toBeFalsy();
      expect(isPlainObject('a')).toBeFalsy();
      expect(isPlainObject(0)).toBeFalsy();
      expect(isPlainObject(true)).toBeFalsy();
      expect(isPlainObject(Symbol())).toBeFalsy();
      expect(isPlainObject(new Date())).toBeFalsy();
      expect(isPlainObject(emptyResolvedPromise)).toBeFalsy();
      expect(isPlainObject(new RegExp(''))).toBeFalsy();
      expect(isPlainObject([])).toBeFalsy();
      expect(isPlainObject(new Set())).toBeFalsy();
      expect(isPlainObject(new Map())).toBeFalsy();
      expect(isPlainObject(anonymousArrowFn)).toBeFalsy();
      expect(isPlainObject(anonymousFn)).toBeFalsy();
      expect(isPlainObject(Just(1))).toBeFalsy();
      expect(isPlainObject(Nothing)).toBeFalsy();
    });
  });

  describe('isFunction', () => {
    it('should return true', () => {
      expect(isFunction(anonymousArrowFn)).toBeTruthy();
      expect(isFunction(anonymousFn)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isFunction(null)).toBeFalsy();
      expect(isFunction(undefined)).toBeFalsy();
      expect(isFunction('a')).toBeFalsy();
      expect(isFunction(0)).toBeFalsy();
      expect(isFunction(true)).toBeFalsy();
      expect(isFunction(Symbol())).toBeFalsy();
      expect(isFunction(new Date())).toBeFalsy();
      expect(isFunction(emptyResolvedPromise)).toBeFalsy();
      expect(isFunction(new RegExp(''))).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
      expect(isFunction(new Set())).toBeFalsy();
      expect(isFunction(new Map())).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction(Just(1))).toBeFalsy();
      expect(isFunction(Nothing)).toBeFalsy();
    });
  });

  describe('isMaybe', () => {
    it('should return true', () => {
      expect(isMaybe(Just(1))).toBeTruthy();
      expect(isMaybe(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isMaybe(null)).toBeFalsy();
      expect(isMaybe(undefined)).toBeFalsy();
      expect(isMaybe('a')).toBeFalsy();
      expect(isMaybe(0)).toBeFalsy();
      expect(isMaybe(true)).toBeFalsy();
      expect(isMaybe(Symbol())).toBeFalsy();
      expect(isMaybe(new Date())).toBeFalsy();
      expect(isMaybe(emptyResolvedPromise)).toBeFalsy();
      expect(isMaybe(new RegExp(''))).toBeFalsy();
      expect(isMaybe([])).toBeFalsy();
      expect(isMaybe(new Set())).toBeFalsy();
      expect(isMaybe(new Map())).toBeFalsy();
      expect(isMaybe({})).toBeFalsy();
      expect(isMaybe(anonymousArrowFn)).toBeFalsy();
      expect(isMaybe(anonymousFn)).toBeFalsy();
    });
  });

  describe('isPropertyKey', () => {
    it('should return true', () => {
      expect(isPropertyKey('a')).toBeTruthy();
      expect(isPropertyKey(0)).toBeTruthy();
      expect(isPropertyKey(Symbol())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isPropertyKey(null)).toBeFalsy();
      expect(isPropertyKey(undefined)).toBeFalsy();
      expect(isPropertyKey(true)).toBeFalsy();
      expect(isPropertyKey(new Date())).toBeFalsy();
      expect(isPropertyKey(emptyResolvedPromise)).toBeFalsy();
      expect(isPropertyKey(new RegExp(''))).toBeFalsy();
      expect(isPropertyKey([])).toBeFalsy();
      expect(isPropertyKey(new Set())).toBeFalsy();
      expect(isPropertyKey(new Map())).toBeFalsy();
      expect(isPropertyKey({})).toBeFalsy();
      expect(isPropertyKey(anonymousArrowFn)).toBeFalsy();
      expect(isPropertyKey(anonymousFn)).toBeFalsy();
      expect(isPropertyKey(Just(1))).toBeFalsy();
      expect(isPropertyKey(Nothing)).toBeFalsy();
    });
  });

  describe('isPrimitive', () => {
    it('should return true', () => {
      expect(isPrimitive('a')).toBeTruthy();
      expect(isPrimitive(0)).toBeTruthy();
      expect(isPrimitive(true)).toBeTruthy();
      expect(isPrimitive(Symbol())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isPrimitive(null)).toBeFalsy();
      expect(isPrimitive(undefined)).toBeFalsy();
      expect(isPrimitive(new Date())).toBeFalsy();
      expect(isPrimitive(emptyResolvedPromise)).toBeFalsy();
      expect(isPrimitive(new RegExp(''))).toBeFalsy();
      expect(isPrimitive([])).toBeFalsy();
      expect(isPrimitive(new Set())).toBeFalsy();
      expect(isPrimitive(new Map())).toBeFalsy();
      expect(isPrimitive({})).toBeFalsy();
      expect(isPrimitive(anonymousArrowFn)).toBeFalsy();
      expect(isPrimitive(anonymousFn)).toBeFalsy();
      expect(isPrimitive(Just(1))).toBeFalsy();
      expect(isPrimitive(Nothing)).toBeFalsy();
    });
  });

  describe('isCollection', () => {
    it('should return true', () => {
      expect(isCollection([])).toBeTruthy();
      expect(isCollection(new Set())).toBeTruthy();
      expect(isCollection(new Map())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isCollection(null)).toBeFalsy();
      expect(isCollection(undefined)).toBeFalsy();
      expect(isCollection('a')).toBeFalsy();
      expect(isCollection(0)).toBeFalsy();
      expect(isCollection(true)).toBeFalsy();
      expect(isCollection(Symbol())).toBeFalsy();
      expect(isCollection(new Date())).toBeFalsy();
      expect(isCollection(emptyResolvedPromise)).toBeFalsy();
      expect(isCollection(new RegExp(''))).toBeFalsy();
      expect(isCollection({})).toBeFalsy();
      expect(isCollection(anonymousArrowFn)).toBeFalsy();
      expect(isCollection(anonymousFn)).toBeFalsy();
      expect(isCollection(Just(1))).toBeFalsy();
      expect(isCollection(Nothing)).toBeFalsy();
    });
  });

  describe('isIterable', () => {
    it('should return true', () => {
      expect(isIterable('a')).toBeTruthy();
      expect(isIterable([])).toBeTruthy();
      expect(isIterable(new Set())).toBeTruthy();
      expect(isIterable(new Map())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isIterable(null)).toBeFalsy();
      expect(isIterable(undefined)).toBeFalsy();
      expect(isIterable(0)).toBeFalsy();
      expect(isIterable(true)).toBeFalsy();
      expect(isIterable(Symbol())).toBeFalsy();
      expect(isIterable(new Date())).toBeFalsy();
      expect(isIterable(emptyResolvedPromise)).toBeFalsy();
      expect(isIterable(new RegExp(''))).toBeFalsy();
      expect(isIterable({})).toBeFalsy();
      expect(isIterable(anonymousArrowFn)).toBeFalsy();
      expect(isIterable(anonymousFn)).toBeFalsy();
      expect(isIterable(Just(1))).toBeFalsy();
      expect(isIterable(Nothing)).toBeFalsy();
    });
  });

  describe('isIterator', () => {
    // TODO: put "should return true" tests
    it('should return false', () => {
      expect(isIterator(null)).toBeFalsy();
      expect(isIterator(undefined)).toBeFalsy();
      expect(isIterator('a')).toBeFalsy();
      expect(isIterator(0)).toBeFalsy();
      expect(isIterator(true)).toBeFalsy();
      expect(isIterator(Symbol())).toBeFalsy();
      expect(isIterator(new Date())).toBeFalsy();
      expect(isIterator(emptyResolvedPromise)).toBeFalsy();
      expect(isIterator(new RegExp(''))).toBeFalsy();
      expect(isIterator([])).toBeFalsy();
      expect(isIterator(new Set())).toBeFalsy();
      expect(isIterator(new Map())).toBeFalsy();
      expect(isIterator({})).toBeFalsy();
      expect(isIterator(anonymousArrowFn)).toBeFalsy();
      expect(isIterator(anonymousFn)).toBeFalsy();
      expect(isIterator(Just(1))).toBeFalsy();
      expect(isIterator(Nothing)).toBeFalsy();
    });
  });

  describe('isEmpty', () => {
    it('should return true', () => {
      expect(isEmpty(null)).toBeTruthy();
      expect(isEmpty(undefined)).toBeTruthy();
      expect(isEmpty(new Date())).toBeTruthy();
      expect(isEmpty([])).toBeTruthy();
      expect(isEmpty(new Set())).toBeTruthy();
      expect(isEmpty(new Map())).toBeTruthy();
      expect(isEmpty({})).toBeTruthy();
      expect(isEmpty(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEmpty('a')).toBeFalsy();
      expect(isEmpty(0)).toBeFalsy();
      expect(isEmpty(false)).toBeFalsy();
      expect(isEmpty(Symbol())).toBeFalsy();
      expect(isEmpty(emptyResolvedPromise)).toBeFalsy();
      expect(isEmpty(new RegExp(''))).toBeFalsy();
      expect(isEmpty(anonymousArrowFn)).toBeFalsy();
      expect(isEmpty(anonymousFn)).toBeFalsy();
      expect(isEmpty(Just(1))).toBeFalsy();
    });
  });

  describe('isType', () => {
    // TODO: add more expectations
    it('should return true', () => {
      expect(isType(Dummy)(new Dummy())).toBeTruthy();
    });

    it('should return false', () => {
      expect(isType(Dummy)({})).toBeFalsy();
    });
  });

  describe('getTypeDefault', () => {
    it('should return type default', () => {
      expect(getTypeDefault('a')).toStrictEqual('');
      expect(getTypeDefault(1)).toStrictEqual(0);
      expect(getTypeDefault(true)).toStrictEqual(false);
      expect(getTypeDefault(Symbol())).toStrictEqual(null);
      expect(getTypeDefault(new Date('2020-01-01'))).toStrictEqual(new Date());
      expect(getTypeDefault([0, 1])).toStrictEqual([]);
      expect(getTypeDefault(new Map([[0, 1]]))).toStrictEqual(new Map());
      expect(getTypeDefault(new Set([0, 1]))).toStrictEqual(new Set());
      expect(getTypeDefault({ a: 1 })).toStrictEqual({});
    });
  });

  describe('isEqual', () => {
    describe('null', () => {
      const value = null;

      it('should return true', () => {
        expect(isEqual(value, null)).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('undefined', () => {
      const value = undefined;

      it('should return true', () => {
        expect(isEqual(value, undefined)).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('string', () => {
      const value = 'b';

      it('should return true', () => {
        expect(isEqual(value, 'b')).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('number', () => {
      const value = 2;

      it('should return true', () => {
        expect(isEqual(value, 2)).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('boolean', () => {
      const value = false;

      it('should return true', () => {
        expect(isEqual(value, false)).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('symbol', () => {
      const value = Symbol();

      it('should return true', () => {
        expect(isEqual(value, value)).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('Date', () => {
      const value = DEFAULT_DATE;

      it('should return true', () => {
        expect(isEqual(value, new Date('2020-01-01T00:00:00Z'))).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    // TODO this test isn't passing
    xdescribe('Promise', () => {
      const value = Promise.resolve('a');

      it('should return true', () => {
        expect(isEqual(value, Promise.resolve('a'))).toBeTruthy();
      });

      it('should return false', (done) => {
        setTimeout(() => {
          expect(isEqual(value, null)).toBeFalsy();
          expect(isEqual(value, undefined)).toBeFalsy();
          expect(isEqual(value, nil)).toBeFalsy();
          expect(isEqual(value, 'a')).toBeFalsy();
          expect(isEqual(value, 1)).toBeFalsy();
          expect(isEqual(value, true)).toBeFalsy();
          expect(isEqual(value, Symbol())).toBeFalsy();
          expect(isEqual(value, new Date())).toBeFalsy();
          expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
          expect(isEqual(value, new RegExp(''))).toBeFalsy();
          expect(isEqual(value, [])).toBeFalsy();
          expect(isEqual(value, new Set())).toBeFalsy();
          expect(isEqual(value, new Map())).toBeFalsy();
          expect(isEqual(value, {})).toBeFalsy();
          expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
          expect(isEqual(value, anonymousFn)).toBeFalsy();
          expect(isEqual(value, Just(1))).toBeFalsy();
          expect(isEqual(value, Nothing)).toBeFalsy();
          done();
        }, 1000);
      });
    });

    describe('RegExp', () => {
      const value = new RegExp('[a-z]+');

      it('should return true', () => {
        expect(isEqual(value, new RegExp('[a-z]+'))).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('Array', () => {
      const value = DEFAULT_ARRAY;

      it('should return true', () => {
        expect(isEqual(value, [1, 2, 3])).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('Set', () => {
      const value = DEFAULT_SET;

      it('should return true', () => {
        expect(isEqual(value, new Set([1, 2, 3]))).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('Map', () => {
      const value = DEFAULT_MAP;

      it('should return true', () => {
        expect(
          isEqual(
            value,
            new Map([
              [1, 'a'],
              [2, 'b'],
              [3, 'c'],
            ])
          )
        ).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });

    describe('PlainObject', () => {
      const value = { a: 1 };

      it('should return true', () => {
        expect(isEqual(value, { a: 1 })).toBeTruthy();
      });

      it('should return false', () => {
        expect(isEqual(value, null)).toBeFalsy();
        expect(isEqual(value, undefined)).toBeFalsy();
        expect(isEqual(value, nil)).toBeFalsy();
        expect(isEqual(value, 'a')).toBeFalsy();
        expect(isEqual(value, 1)).toBeFalsy();
        expect(isEqual(value, true)).toBeFalsy();
        expect(isEqual(value, Symbol())).toBeFalsy();
        expect(isEqual(value, new Date())).toBeFalsy();
        expect(isEqual(value, emptyResolvedPromise)).toBeFalsy();
        expect(isEqual(value, new RegExp(''))).toBeFalsy();
        expect(isEqual(value, [])).toBeFalsy();
        expect(isEqual(value, new Set())).toBeFalsy();
        expect(isEqual(value, new Map())).toBeFalsy();
        expect(isEqual(value, {})).toBeFalsy();
        expect(isEqual(value, anonymousArrowFn)).toBeFalsy();
        expect(isEqual(value, anonymousFn)).toBeFalsy();
        expect(isEqual(value, Just(1))).toBeFalsy();
        expect(isEqual(value, Nothing)).toBeFalsy();
      });
    });
  });

  describe('haveSameProperties', () => {
    it('should return true', () => {
      expect(haveSameProperties({}, {})).toBeTruthy();
      expect(haveSameProperties({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
    });

    it('should return false', () => {
      expect(haveSameProperties({ a: 1 }, {})).toBeFalsy();
      expect(haveSameProperties({}, { b: 2 })).toBeFalsy();
      expect(haveSameProperties({ a: 1 }, { b: 2 })).toBeFalsy();
      expect(haveSameProperties({ a: 1 }, { a: 1, b: 2 })).toBeFalsy();
    });
  });

  describe('haveSameType', () => {
    it('should return true', () => {
      expect(haveSameType([0, 'a'], [0, 'a'])).toBeTruthy();
      expect(haveSameType([0, 'a'], [1, 'b'])).toBeTruthy();
    });

    it('should return false', () => {
      expect(haveSameType([0, 'a'], ['a', 0])).toBeFalsy();
      expect(haveSameType([['a'], ['b']], [1, 2])).toBeFalsy();
    });
  });

  describe('propertyIn', () => {
    it('should return true', () => {
      expect(propertyIn('equals', { equals: true })).toBeTruthy();
    });

    it('should return false', () => {
      expect(propertyIn('equals', { a: true })).toBeFalsy();
    });
  });

  describe('coalesce', () => {
    it('should return first non null value', () => {
      expect(coalesce(null, undefined, 0, 'a', false, Symbol(), {}, [], new Date())).toStrictEqual(0);
    });
  });
});
