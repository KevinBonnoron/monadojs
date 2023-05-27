import { Just, Nothing } from '../src';

export interface Person {
  id: number;
  name: string;
  birthDate: Date;
}

export const anonymousArrowFn = () => {};
export const anonymousFn = function () {};

export const EMPTY_RESOLVED_PROMISE = Promise.resolve();
export const EMPTY_PLAIN_OBJECT = {} as const;
export const DEFAULT_DATE = new Date('2020-01-01T00:00:00Z');
export const DEFAULT_SYMBOL = Symbol('SYMBOL');
export const DEFAULT_PLAIN_OBJECT = { a: 1, b: 2, c: 3 } as const;
export const DEFAULT_REGEX = new RegExp('');

export const fooBar: Person = { id: 1, name: 'Foo Bar', birthDate: new Date('2020-01-01') } as const;
export const johnDoe: Person = { id: 2, name: 'John Doe', birthDate: new Date('2021-01-01') } as const;
export const janeDoe: Person = { id: 3, name: 'Jane Doe', birthDate: new Date('2022-01-01') } as const;
export const babyDoe: Person = { id: 4, name: 'Baby Doe', birthDate: new Date('2023-01-01') } as const;

export const EMPTY_ARRAY = [];
export const NUMBER_ARRAY = Array.from({ length: 9 }, (_, i) => i + 1);
export const STRING_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const OBJECT_ARRAY = [fooBar, johnDoe, janeDoe];
export const DIVERSE_ARRAY = [
  null,
  undefined,
  'a',
  0,
  true,
  DEFAULT_SYMBOL,
  DEFAULT_DATE,
  EMPTY_RESOLVED_PROMISE,
  new RegExp(''),
  [],
  new Set(),
  new Map(),
  {},
  anonymousArrowFn,
  anonymousFn,
  Just(1),
  Nothing
];

export const EMPTY_SET = new Set();
export const NUMBER_SET = new Set(NUMBER_ARRAY);
export const STRING_SET = new Set(STRING_ARRAY);
export const OBJECT_SET = new Set(OBJECT_ARRAY);
export const DIVERSE_SET = new Set(DIVERSE_ARRAY);

export const EMPTY_MAP = new Map();
export const NUMBER_MAP = new Map(NUMBER_ARRAY.map((value, index) => [index, value]));
export const STRING_MAP = new Map(STRING_ARRAY.map((value, index) => [index, value]));
export const DIVERSE_MAP = new Map(DIVERSE_ARRAY.map((value, index) => [index, value]));
