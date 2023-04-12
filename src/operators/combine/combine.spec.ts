import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { combine } from './combine';

describe('combine', () => {
  const mapToOperator = (value: number) => () => value;

  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });
});
