import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { reverse } from './reverse';

describe('reverse', () => {
  const operator = reverse();

  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should reverse', () => {
      expect(operator(source)).toStrictEqual([3, 2, 1]);
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should reverse', () => {
      expect(operator([...source])).toStrictEqual([3, 2, 1]);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should reverse', () => {
      expect(operator([...source])).toStrictEqual([
        [3, 'c'],
        [2, 'b'],
        [1, 'a'],
      ]);
    });
  });
});
