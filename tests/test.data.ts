import { Just, Nothing } from '../src';

export interface Person {
  id: number;
  name: string;
  birthDate: Date;
}

export const person: Person = { id: 1, name: 'Foo Bar', birthDate: new Date() };

export const NUMBER_ARRAY = Array.from({ length: 9 }, (_, i) => i + 1);
export const STRING_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const DIVERSE_ARRAY = [
  null,
  undefined,
  'a',
  0,
  true,
  Symbol(),
  new Date(),
  Promise.resolve(),
  new RegExp(''),
  [],
  new Set(),
  new Map(),
  {},
  () => {},
  function () {},
  Just(1),
  Nothing
];

export const NUMBER_SET = new Set(NUMBER_ARRAY);
export const STRING_SET = new Set(STRING_ARRAY);
export const DIVERSE_SET = new Set(DIVERSE_ARRAY);

export const NUMBER_MAP = new Map(NUMBER_ARRAY.map((value, index) => [index, value]));
export const STRING_MAP = new Map(STRING_ARRAY.map((value, index) => [index, value]));
export const DIVERSE_MAP = new Map(DIVERSE_ARRAY.map((value, index) => [index, value]));

export const DEFAULT_DATE = new Date('2020-01-01T00:00:00Z');

export const DEFAULT_SYMBOL = Symbol('SYMBOL');

export const DEFAULT_PLAIN_OBJECT = { a: 1, b: 2, c: 3 };
