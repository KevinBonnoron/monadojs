import { describe, expect, it } from 'vitest';
import { reduce } from '../../operators';
import { min } from './min';

describe('min', () => {
  const operator = min();

  describe('string', () => {
    it('should return the min', () => {
      const values = ['a', 'c', 'b'];
      const expected = 'a';

      expect(values.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(values)).toStrictEqual(expected);
    });
  });

  describe('number', () => {
    it('should return the min', () => {
      const source = [1, 3, 2];
      const expected = 1;

      expect(source.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(source)).toStrictEqual(expected);
    });
  });
});
