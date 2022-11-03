import { haveSameProperties, haveSameTypes, is, isArray, isBoolean, isDate, isEmpty, isEqual, isFunction, isMap, isNil, isNull, isNumber, isObject, isRegExp, isString, isSymbol, isUndefined, propertyIn } from './object.utils';

type Expectation = { value: unknown; expect: boolean };
const checkExpectations = (fn: (value: unknown) => boolean, expectations: Expectation[]) => expectations.forEach((expectation) => expect(fn(expectation.value)).toEqual(expectation.expect));

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
];
const emptyExpectations: Expectation[] = [
  { value: null, expect: true },
  { value: undefined, expect: true },
  { value: 'a', expect: true },
  { value: 0, expect: true },
  { value: false, expect: true },
  { value: Symbol(), expect: true },
  { value: new Date(), expect: true },
  { value: new RegExp(''), expect: false },
  { value: [], expect: true },
  { value: new Map(), expect: true },
  { value: {}, expect: true },
  { value: () => {}, expect: true },
  { value: function () {}, expect: true },
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

  it('should return if value is passed type', () => {
    class Dummy {}

    checkExpectations(is(null), nullExpectations);
    checkExpectations(is(undefined), undefinedExpectations);
    checkExpectations(is(String), stringExpectations);
    checkExpectations(is(Number), numberExpectations);
    checkExpectations(is(Boolean), booleanExpectations);
    checkExpectations(is(Symbol), symbolExpectations);
    checkExpectations(is(Date), dateExpectations);
    checkExpectations(is(RegExp), regExpExpectations);
    checkExpectations(is(Array), arrayExpectations);
    checkExpectations(is(Map), mapExpectations);
    checkExpectations(is(Object), objectExpectations);
    checkExpectations(is(Function), functionExpectations);
    expect(is(Dummy)(new Dummy())).toBeTruthy();
    expect(is(Dummy)({})).toBeFalsy();
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
    expect(haveSameTypes([0, 'a'], [0, 'a'])).toBeTruthy();
    expect(haveSameTypes([0, 'a'], [1, 'b'])).toBeTruthy();
    expect(haveSameTypes([0, 'a'], ['a', 0])).toBeFalsy();
    expect(haveSameTypes([['a'], ['b']], [1, 2])).toBeFalsy();
  });

  it('should return if property in object', () => {
    expect(propertyIn('equals', { equals: true })).toBeTruthy();
    expect(propertyIn('equals', { a: true })).toBeFalsy();
  });
});
