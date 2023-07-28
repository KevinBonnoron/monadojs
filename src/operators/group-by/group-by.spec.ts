import { describe, expect, it } from 'vitest';
import { Person, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { groupBy } from './group-by';

describe('groupBy', () => {
  describe('Array', () => {
    const source = [fooBar, johnDoe, janeDoe, babyDoe];

    it('should group by property', () => {
      const operator = groupBy('sex');
      const expected = { M: [fooBar, johnDoe], F: [janeDoe, babyDoe] };

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should group by operator', () => {
      const operator = groupBy((person: Person) => person.sex);
      const expected = { M: [fooBar, johnDoe], F: [janeDoe, babyDoe] };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
