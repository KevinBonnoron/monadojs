import { ofType } from './of-type';

type Expectation = { value: unknown; expect: boolean };
const checkExpectations = (fn: (value: unknown) => boolean, expectations: Expectation[]) => expectations.forEach((expectation) => expect(fn(expectation.value)).toEqual(expectation.expect));

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

describe('of-type', () => {
  it('should return if value is of specified type', () => {
    checkExpectations(ofType('string'), stringExpectations);
    checkExpectations(ofType('number'), numberExpectations);
    checkExpectations(ofType('boolean'), booleanExpectations);
    checkExpectations(ofType('symbol'), symbolExpectations);
    checkExpectations(ofType('object'), objectExpectations);
    checkExpectations(ofType('function'), functionExpectations);
    checkExpectations(ofType('array'), arrayExpectations);
    checkExpectations(ofType('date'), dateExpectations);
    checkExpectations(ofType('map'), mapExpectations);
    checkExpectations(ofType('regexp'), regExpExpectations);
  });
});
