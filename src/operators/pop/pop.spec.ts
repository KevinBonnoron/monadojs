import { DEFAULT_MAP } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  describe('array', () => {
    it('should return last element', () => {
      const source = [0, 1, 2, 3];
      const operator = pop();
      const expected = 3;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([0, 1, 2]);
    });
  });

  describe('map', () => {
    it('should return last element', () => {
      const source = DEFAULT_MAP;
      const operator = pop();
      const expected = [2, 'c'];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [0, 'a'],
          [1, 'b'],
        ])
      );
    });
  });

  describe('set', () => {
    it('should return last element', () => {
      const source = new Set([0, 1, 2, 3]);
      const operator = pop();
      const expected = 3;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([0, 1, 2]));
    });
  });
});
