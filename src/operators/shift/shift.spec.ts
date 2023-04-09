import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { shift } from './shift';

describe('shift', () => {
  const operator = shift();

  describe('Array', () => {
    it('should return first element', () => {
      const source = [0, 1, 2, 3];
      const expected = 0;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([1, 2, 3]);
    });
  });

  describe('Set', () => {
    it('should return first element', () => {
      const source = DEFAULT_SET;
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([2, 3]));
    });
  });

  describe('Map', () => {
    it('should return first element', () => {
      const source = DEFAULT_MAP;
      const expected = [1, 'a'];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [2, 'b'],
          [3, 'c'],
        ])
      );
    });
  });
});
