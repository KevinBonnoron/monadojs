import { Just, Nothing } from '../maybe/maybe.utils';
import {
  coalesce,
  getTypeDefault,
  haveSameProperties,
  haveSameType,
  isArray,
  isBoolean,
  isDate,
  isEmpty,
  isEqual,
  isFalse,
  isFunction,
  isMap,
  isMaybe,
  isNil,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isSymbol,
  isTrue,
  isType,
  isUndefined,
  propertyIn,
} from './object.utils';

type Expectation = { value: unknown; expect: boolean };
const checkExpectations = (fn: (value: unknown) => boolean, expectations: Expectation[]) =>
  expectations.forEach((expectation) => {
    try {
      expect(fn(expectation.value)).toEqual(expectation.expect);
    } catch (e) {
      console.log('Expectation value: ', expectation.value);
      throw e;
    }
  });

const nullExpectations: Expectation[] = [
  { value: null, expect: true },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const undefinedExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: true },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const nilExpectations: Expectation[] = [
  { value: null, expect: true },
  { value: undefined, expect: true },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const stringExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: true },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const numberExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: true },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const booleanExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: true },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const symbolExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: true },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const dateExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: true },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const regExpExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: true },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const arrayExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: true },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const mapExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: true },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const objectExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: true },
  { value: new RegExp(''), expect: true },
  { value: [], expect: false },
  { value: new Map(), expect: true },
  { value: {}, expect: true },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: true },
  { value: Nothing, expect: true },
];
const emptyExpectations: Expectation[] = [
  { value: null, expect: true },
  { value: undefined, expect: true },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: true },
  { value: new RegExp(''), expect: false },
  { value: [], expect: true },
  { value: new Map(), expect: true },
  { value: {}, expect: true },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: false },
  { value: Nothing, expect: true },
];
const functionExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: true },
  { value: function () {}, expect: true },
  { value: Just(1), expect: false },
  { value: Nothing, expect: false },
];
const maybeExpectations: Expectation[] = [
  { value: null, expect: false },
  { value: undefined, expect: false },
  { value: 'a', expect: false },
  { value: 0, expect: false },
  { value: false, expect: false },
  { value: Symbol(), expect: false },
  { value: new Date(), expect: false },
  { value: new RegExp(''), expect: false },
  { value: [], expect: false },
  { value: new Map(), expect: false },
  { value: {}, expect: false },
  { value: () => {}, expect: false },
  { value: function () {}, expect: false },
  { value: Just(1), expect: true },
  { value: Nothing, expect: true },
];

describe('ObjectUtils', () => {
  it('should return if value is null', () => {
    checkExpectations(isNull, nullExpectations);
  });

  it('should return if value is undefined', () => {
    checkExpectations(isUndefined, undefinedExpectations);
  });

  it('should return if value is nil', () => {
    checkExpectations(isNil, nilExpectations);
  });

  it('should return if value is string', () => {
    checkExpectations(isString, stringExpectations);
  });

  it('should return if value is number', () => {
    checkExpectations(isNumber, numberExpectations);
  });

  it('should return if value is boolean', () => {
    checkExpectations(isBoolean, booleanExpectations);
  });

  it('should return if value is symbol', () => {
    checkExpectations(isSymbol, symbolExpectations);
  });

  it('should return if value is date', () => {
    checkExpectations(isDate, dateExpectations);
  });

  it('should return if value is regexp', () => {
    checkExpectations(isRegExp, regExpExpectations);
  });

  it('should return if value is array', () => {
    checkExpectations(isArray, arrayExpectations);
  });

  it('should return if value is map', () => {
    checkExpectations(isMap, mapExpectations);
  });

  it('should return if value is object', () => {
    checkExpectations(isObject, objectExpectations);
  });

  it('should return if value is empty', () => {
    checkExpectations(isEmpty, emptyExpectations);
  });

  it('should return if value is function', () => {
    checkExpectations(isFunction, functionExpectations);
  });

  it('should return if value is maybe', () => {
    checkExpectations(isMaybe, maybeExpectations);
  });

  it('should return if value is true', () => {
    expect(isTrue(true)).toBeTruthy();
    expect(isTrue(false)).toBeFalsy();
  });

  it('should return if value is false', () => {
    expect(isFalse(true)).toBeFalsy();
    expect(isFalse(false)).toBeTruthy();
  });

  it('should return if value is passed type', () => {
    class Dummy {}

    checkExpectations(isType(null), nullExpectations);
    checkExpectations(isType(undefined), undefinedExpectations);
    checkExpectations(isType(String), stringExpectations);
    checkExpectations(isType(Number), numberExpectations);
    checkExpectations(isType(Boolean), booleanExpectations);
    checkExpectations(isType(Symbol), symbolExpectations);
    checkExpectations(isType(Date), dateExpectations);
    checkExpectations(isType(RegExp), regExpExpectations);
    checkExpectations(isType(Array), arrayExpectations);
    checkExpectations(isType(Map), mapExpectations);
    checkExpectations(isType(Object), objectExpectations);
    checkExpectations(isType(Function), functionExpectations);
    expect(isType(Dummy)(new Dummy())).toBeTruthy();
    expect(isType(Dummy)({})).toBeFalsy();
  });

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

  it('should return if value is equal', () => {
    class Dummy {
      constructor(readonly a: number) {}
    }

    expect(isEqual(1, 1)).toBeTruthy();
    expect(isEqual('a', 'a')).toBeTruthy();
    expect(isEqual(true, true)).toBeTruthy();
    expect(isEqual([], [])).toBeTruthy();
    expect(isEqual([1, 0, 2], [1, 0, 2])).toBeTruthy();
    expect(isEqual([1, 0, 2], [2, 0, 1])).toBeFalsy();
    expect(isEqual({}, {})).toBeTruthy();
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
    expect(isEqual({ a: 1, b: 2 }, { a: 2, b: 1 })).toBeFalsy();
    expect(isEqual(NaN, NaN)).toBeTruthy();
    expect(isEqual(new Dummy(5), new Dummy(5))).toBeTruthy();
  });

  it('should return if two object have same properties', () => {
    expect(haveSameProperties({}, {})).toBeTruthy();
    expect(haveSameProperties({ a: 1 }, {})).toBeFalsy();
    expect(haveSameProperties({}, { b: 2 })).toBeFalsy();
    expect(haveSameProperties({ a: 1 }, { b: 2 })).toBeFalsy();
    expect(haveSameProperties({ a: 1 }, { a: 1, b: 2 })).toBeFalsy();
    expect(haveSameProperties({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
  });

  it('should return if two object have same types', () => {
    expect(haveSameType([0, 'a'], [0, 'a'])).toBeTruthy();
    expect(haveSameType([0, 'a'], [1, 'b'])).toBeTruthy();
    expect(haveSameType([0, 'a'], ['a', 0])).toBeFalsy();
    expect(haveSameType([['a'], ['b']], [1, 2])).toBeFalsy();
  });

  it('should return if property is present in object', () => {
    expect(propertyIn('equals', { equals: true })).toBeTruthy();
    expect(propertyIn('equals', { a: true })).toBeFalsy();
  });

  it('should return first non nil value', () => {
    expect(coalesce(null, undefined, 0, 'a', false, Symbol(), {}, [], new Date())).toStrictEqual(0);
  });
});
