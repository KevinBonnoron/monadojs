import { Just, Nothing } from '../src';

export interface Person {
  id: number;
  name: string;
  birthDate: Date;
  sex: 'M' | 'F';
}

export const NOW = new Date('2020-01-01');
export const anonymousArrowFn = () => {
  /**/
};
export const anonymousFn = () => {
  /**/
};

export const EMPTY_RESOLVED_PROMISE = Promise.resolve();
export const EMPTY_PLAIN_OBJECT = {} as const;
export const DEFAULT_DATE = new Date('2020-01-01T00:00:00Z');
export const DEFAULT_SYMBOL = Symbol('SYMBOL') as symbol;
export const DEFAULT_PLAIN_OBJECT = { a: 1, b: 2, c: 3 } as const;
export const DEFAULT_REGEX = /(?:)/;
export const DEFAULT_MAYBE = Just(1);

export const fooBar: Person = { id: 1, name: 'Foo Bar', birthDate: new Date('2020-01-01'), sex: 'M' } as const;
export const johnDoe: Person = { id: 2, name: 'John Doe', birthDate: new Date('2021-01-01'), sex: 'M' } as const;
export const janeDoe: Person = { id: 3, name: 'Jane Doe', birthDate: new Date('2022-01-01'), sex: 'F' } as const;
export const babyDoe: Person = { id: 4, name: 'Baby Doe', birthDate: new Date('2023-01-01'), sex: 'F' } as const;

export const EMPTY_ARRAY = [] as unknown[];
export const NUMBER_ARRAY = Array.from({ length: 9 }, (_, i) => i + 1);
export const STRING_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const PERSON_ARRAY = [fooBar, johnDoe, janeDoe, babyDoe];
export const DIVERSE_ARRAY = [null, undefined, 'a', 0, true, DEFAULT_SYMBOL, DEFAULT_DATE, EMPTY_RESOLVED_PROMISE, /(?:)/, [], new Set(), new Map(), {}, anonymousArrowFn, anonymousFn, DEFAULT_MAYBE, Nothing] as const;

export const EMPTY_SET = new Set();
export const NUMBER_SET = new Set(NUMBER_ARRAY);
export const STRING_SET = new Set(STRING_ARRAY);
export const PERSON_SET = new Set(PERSON_ARRAY);
export const DIVERSE_SET = new Set(DIVERSE_ARRAY);

export const EMPTY_MAP = new Map<string, string>();
export const NUMBER_MAP = new Map(NUMBER_ARRAY.map((value, index) => [index, value]));
export const STRING_MAP = new Map(STRING_ARRAY.map((value, index) => [index, value]));
export const NUMBER_PERSON_MAP = new Map(PERSON_ARRAY.map((value, index) => [index, value]));
export const STRING_PERSON_MAP = new Map(PERSON_ARRAY.map((value) => [value.name, value]));
export const DIVERSE_MAP = new Map(DIVERSE_ARRAY.map((value, index) => [index, value]));
