import { reduce } from '../../operators';
import { max } from './max';

describe('max', () => {
  describe('string', () => {
    it('should return the max', () => {
      const source: string[] = ['a', 'c', 'b'];
      const operator = max<string>();
      const expected = 'c';

      expect(source.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(source)).toStrictEqual(expected);
    });
  });

  describe('number', () => {
    it('should return the max', () => {
      const source = [1, 3, 2];
      const operator = max<number>();
      const expected = 3;

      expect(source.reduce(operator)).toStrictEqual(expected);
      expect(reduce(operator)(source)).toStrictEqual(expected);
    });
  });
});
