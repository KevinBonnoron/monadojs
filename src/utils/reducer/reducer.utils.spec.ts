import { describe, expect, it } from 'vitest';
import { PERSON_ARRAY, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { ɵobjectAccumulator } from './reducer.utils';

describe('ReducerUtils', () => {
  describe('ɵobjectAccumulator', () => {
    it('should accumulate object', () => {
      const source = PERSON_ARRAY;
      const result = source.reduce(
        ɵobjectAccumulator((person) => person.sex),
        {},
      );
      expect(result).toStrictEqual({
        M: [fooBar, johnDoe],
        F: [janeDoe, babyDoe],
      });
    });
  });
});
