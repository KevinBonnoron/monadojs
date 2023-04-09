import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { combine } from './combine';

describe('combine', () => {
  const mapToOperator = (value: number) => () => value;

  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should map each element to a specific value', () => {
      const expected = [5, 10];
      expect(combine(mapToOperator(5), mapToOperator(10))(source)).toStrictEqual(expected);
    });
  });
});
