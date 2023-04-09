export interface Person {
  id: number;
  name: string;
  birthDate: Date;
}

export const person: Person = { id: 1, name: 'Foo Bar', birthDate: new Date() };

export const DEFAULT_ARRAY = [1, 2, 3];
export const DEFAULT_MAP = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]);
export const DEFAULT_SET = new Set([1, 2, 3]);
export const DEFAULT_DATE = new Date('2020-01-01T00:00:00Z');
export const DEFAULT_SYMBOL = Symbol('SYMBOL');
export const DEFAULT_PLAIN_OBJECT = { a: 1, b: 2, c: 3 };
