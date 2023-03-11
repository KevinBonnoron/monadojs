import { Maybe } from '../../types';
import { Just, Nothing } from '../../utils';
import { ofType } from './of-type';

class DummyClass {
  a!: number;
}

type Expectation = { value: unknown; expect: boolean };
const checkExpectations = (fn: (value: unknown) => boolean, expectations: Expectation[]) =>
  expectations.forEach((expectation) => expect(fn(expectation.value)).toEqual(expectation.expect));

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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: true },
  { value: Nothing, expect: true },
  { value: new DummyClass(), expect: true },
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: false },
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
  { value: Just(''), expect: true },
  { value: Nothing, expect: true },
  { value: new DummyClass(), expect: false },
];
const dummyClassExpectations: Expectation[] = [
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
  { value: Just(''), expect: false },
  { value: Nothing, expect: false },
  { value: new DummyClass(), expect: true },
];

describe('of-type', () => {
  it('should return if value is of specified type', () => {
    checkExpectations(ofType(String), stringExpectations);
    checkExpectations(ofType(Number), numberExpectations);
    checkExpectations(ofType(Boolean), booleanExpectations);
    checkExpectations(ofType(Symbol), symbolExpectations);
    checkExpectations(ofType(Date), dateExpectations);
    checkExpectations(ofType(RegExp), regExpExpectations);
    checkExpectations(ofType(Array), arrayExpectations);
    checkExpectations(ofType(Map), mapExpectations);
    checkExpectations(ofType(Object), objectExpectations);
    checkExpectations(ofType(Function), functionExpectations);
    checkExpectations(ofType(Maybe), maybeExpectations);
    checkExpectations(ofType(DummyClass), dummyClassExpectations);
  });
});
