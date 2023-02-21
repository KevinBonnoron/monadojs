import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { to } from './to';

describe('to', () => {
  describe('Set', () => {
    const operator = to(Set);

    it('should convert array', () => {
      const source = DEFAULT_ARRAY;

      expect(operator(source)).toStrictEqual(new Set([...DEFAULT_ARRAY]));
    });

    it('should convert map', () => {
      const source = DEFAULT_MAP;

      expect(operator(source)).toStrictEqual(new Set([...DEFAULT_MAP]));
    });

    it('should keep set', () => {
      const source = DEFAULT_SET;

      expect(operator(source)).toStrictEqual(source);
    });
  });

  describe('Array', () => {
    const operator = to(Array);

    it('should convert set', () => {
      const source = DEFAULT_SET;

      expect(operator(source)).toStrictEqual([...DEFAULT_SET]);
    });

    it('should convert map', () => {
      const source = DEFAULT_MAP;

      expect(operator(source)).toStrictEqual([...DEFAULT_MAP]);
    });

    it('should keep array', () => {
      const source = DEFAULT_ARRAY;

      expect(operator(source)).toStrictEqual(source);
    });
  });

  describe('Map', () => {
    const operator = to(Map, (value) => `${value}`);

    it('should convert set', () => {
      const source = DEFAULT_SET;

      expect(operator(source)).toStrictEqual(
        new Map([
          ['1', 1],
          ['2', 2],
          ['3', 3],
        ])
      );
    });

    it('should convert array', () => {
      const source = DEFAULT_ARRAY;

      expect(operator(source)).toStrictEqual(
        new Map([
          ['1', 1],
          ['2', 2],
          ['3', 3],
        ])
      );
    });

    it('should keep map', () => {
      const source = DEFAULT_MAP;

      expect(operator(source)).toStrictEqual(source);
    });
  });
});
