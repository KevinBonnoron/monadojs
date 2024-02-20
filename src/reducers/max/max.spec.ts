import { describe, expect, it } from 'vitest';
import { reduce } from '../../operators';
import { max } from './max';

describe('max', () => {
  const operator = max();

  describe('string', () => {
    it('should return the max', () => {
      const source: string[] = ['a', 'c', 'b'];
      const expected = 'c';

      expect(source.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(source)).toStrictEqual(expected);
    });
  });

  describe('number', () => {
    it('should return the max', () => {
      const source = [1, 3, 2];
      const expected = 3;

      expect(source.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(source)).toStrictEqual(expected);
    });
  });
});
