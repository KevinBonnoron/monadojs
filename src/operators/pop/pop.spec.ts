import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  describe('Array', () => {
    it('should return last element', () => {
      const source = [0, 1, 2, 3];
      const operator = pop();
      const expected = 3;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([0, 1, 2]);
    });
  });

  describe('Set', () => {
    it('should return last element', () => {
      const source = DEFAULT_SET;
      const operator = pop();
      const expected = 3;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([1, 2]));
    });
  });

  describe('Map', () => {
    it('should return last element', () => {
      const source = DEFAULT_MAP;
      const operator = pop();
      const expected = [3, 'c'];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [1, 'a'],
          [2, 'b'],
        ])
      );
    });
  });
});
