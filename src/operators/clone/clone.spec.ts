import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, PERSON_SET, type Person, STRING_ARRAY, STRING_MAP, STRING_SET, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import type { Collection } from '../../types';
import { isEqual, isSet } from '../../utils';
import { clone } from './clone';

const deleteElementFromCollection = <T>(value: T, collection: Collection<T>) => {
  if (isSet(collection)) {
    for (const element of collection) {
      if (isEqual(value, element)) {
        collection.delete(element);
        return;
      }
    }
  }
};

describe('clone', () => {
  const operator = clone();

  describe('Date', () => {
    it('should clone', () => {
      const source = new Date('2020-01-01');
      const cloned = operator(source);
      cloned.setMonth(5);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Date('2020-06-01'));
      expect(source).toStrictEqual(new Date('2020-01-01'));
    });
  });

  describe('Array', () => {
    it('should clone strings', () => {
      const source = STRING_ARRAY;
      const cloned = operator(source);
      cloned.push('A');
      cloned.shift();

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual('bcdefghijklmnopqrstuvwxyzA'.split(''));
      expect(source).toStrictEqual('abcdefghijklmnopqrstuvwxyz'.split(''));
    });

    it('should clone numbers', () => {
      const source = NUMBER_ARRAY;
      const cloned = operator(source);
      cloned.push(10);
      cloned.shift();

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(source).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Set', () => {
    it('should clone strings', () => {
      const source = STRING_SET;
      const cloned = operator(source);
      cloned.add('A');
      cloned.delete('a');

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Set('bcdefghijklmnopqrstuvwxyzA'.split('')));
      expect(source).toStrictEqual(new Set('abcdefghijklmnopqrstuvwxyz'));
    });

    it('should clone numbers', () => {
      const source = NUMBER_SET;
      const cloned = operator(source);
      cloned.add(10);
      cloned.delete(1);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9, 10]));
      expect(source).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

    it('should clone objects', () => {
      const source = PERSON_SET;
      const cloned = operator(source);
      const person: Person = { id: 5, name: 'John Doe Jr', birthDate: new Date('2023-01-01'), sex: 'M' };
      cloned.add(person);
      deleteElementFromCollection(fooBar, cloned);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Set([johnDoe, janeDoe, babyDoe, person]));
      expect(source).toStrictEqual(new Set([fooBar, johnDoe, janeDoe, babyDoe]));
    });
  });

  describe('Map', () => {
    it('should clone strings', () => {
      const source = STRING_MAP;
      const cloned = operator(source);
      cloned.set(25, 'A');
      cloned.delete(0);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(
        new Map([
          [1, 'b'],
          [2, 'c'],
          [3, 'd'],
          [4, 'e'],
          [5, 'f'],
          [6, 'g'],
          [7, 'h'],
          [8, 'i'],
          [9, 'j'],
          [10, 'k'],
          [11, 'l'],
          [12, 'm'],
          [13, 'n'],
          [14, 'o'],
          [15, 'p'],
          [16, 'q'],
          [17, 'r'],
          [18, 's'],
          [19, 't'],
          [20, 'u'],
          [21, 'v'],
          [22, 'w'],
          [23, 'x'],
          [24, 'y'],
          [25, 'A'],
        ]),
      );
      expect(source).toStrictEqual(
        new Map([
          [0, 'a'],
          [1, 'b'],
          [2, 'c'],
          [3, 'd'],
          [4, 'e'],
          [5, 'f'],
          [6, 'g'],
          [7, 'h'],
          [8, 'i'],
          [9, 'j'],
          [10, 'k'],
          [11, 'l'],
          [12, 'm'],
          [13, 'n'],
          [14, 'o'],
          [15, 'p'],
          [16, 'q'],
          [17, 'r'],
          [18, 's'],
          [19, 't'],
          [20, 'u'],
          [21, 'v'],
          [22, 'w'],
          [23, 'x'],
          [24, 'y'],
          [25, 'z'],
        ]),
      );
    });

    it('should clone numbers', () => {
      const source = NUMBER_MAP;
      const cloned = operator(source);
      cloned.set(9, 10);
      cloned.delete(0);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(
        new Map([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9],
          [9, 10],
        ]),
      );
      expect(source).toStrictEqual(
        new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9],
        ]),
      );
    });
  });

  describe('PlainObject', () => {
    it('should clone', () => {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const source: any = { a: { b: 1, c: { d: [2] } } };
      const cloned = operator(source);
      cloned.a.c.d.push(5);
      cloned.a.b = 2;

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual({ a: { b: 2, c: { d: [2, 5] } } });
      expect(source).toStrictEqual({ a: { b: 1, c: { d: [2] } } });
    });
  });
});
