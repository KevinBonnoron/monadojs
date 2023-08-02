import { describe, expect, it } from 'vitest';
import { babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { prop } from '../../mappers';
import { groupBy } from './group-by';

describe('groupBy', () => {
  describe('Array', () => {
    const source = [fooBar, johnDoe, janeDoe, babyDoe];

    it('should group by property', () => {
      const operator = groupBy('sex');
      const expected = { M: [fooBar, johnDoe], F: [janeDoe, babyDoe] };

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should group by function', () => {
      const operator = groupBy((person) => person.name.split(' ')[1]);
      const expected = { Bar: [fooBar], Doe: [johnDoe, janeDoe, babyDoe] };

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should group by operator', () => {
      const operator = groupBy(prop('sex'));
      const expected = { M: [fooBar, johnDoe], F: [janeDoe, babyDoe] };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
