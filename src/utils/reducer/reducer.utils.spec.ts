import { describe, expect, it } from 'vitest';
import { babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { ɵobjectAccumulator } from './reducer.utils';

describe('ReducerUtils', () => {
  describe('ɵobjectAccumulator', () => {
    it('should accumulate object', () => {
      const source = [fooBar, johnDoe, janeDoe, babyDoe];
      const result = source.reduce(ɵobjectAccumulator((person) => person.sex), {} as any);
      expect(result).toStrictEqual({
        'M': [fooBar, johnDoe],
        'F': [janeDoe, babyDoe]
      });
    });
  });
});
