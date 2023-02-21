import { DEFAULT_MAP } from '../../../tests/test.data';
import { shift } from './shift';

describe('shift', () => {
  describe('Array', () => {
    it('should return first element', () => {
      const source = [0, 1, 2, 3];
      const operator = shift();
      const expected = 0;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([1, 2, 3]);
    });
  });

  describe('Map', () => {
    it('should return first element', () => {
      const source = DEFAULT_MAP;
      const operator = shift();
      const expected = [0, 'a'];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [1, 'b'],
          [2, 'c'],
        ])
      );
    });
  });

  describe('Set', () => {
    it('should return first element', () => {
      const source = new Set([0, 1, 2, 3]);
      const operator = shift();
      const expected = 0;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([1, 2, 3]));
    });
  });
});
