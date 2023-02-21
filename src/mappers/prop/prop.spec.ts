import { prop } from './prop';

describe('prop', () => {
  describe('Object', () => {
    const operator = prop('a', 4);

    it('should return property', () => {
      const source = { a: 1, b: 2, c: 3 };
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });

    it('should return defaultValue', () => {
      const source = { b: 2, c: 3 };
      const expected = 4;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });
  });

  describe('Map', () => {
    const operator = prop('a', 4);

    it('should return property', () => {
      const source = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]);
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });

    it('should return defaultValue', () => {
      const source = new Map([
        ['b', 2],
        ['c', 3],
      ]);
      const expected = 4;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });
  });
});
