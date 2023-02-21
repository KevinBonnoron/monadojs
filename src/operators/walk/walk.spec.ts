import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { walk } from './walk';

describe('walk', () => {
  const fn = jest.fn((value: any) => value);

  beforeEach(() => fn.mockRestore());

  describe('Object', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = { a: 1, b: { c: 2, d: { e: 3 } } };

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(6);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith({ c: 2, d: { e: 3 } });
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith({ e: 3 });
      expect(fn).toHaveBeenCalledWith(3);
    });

    it('should walk with recursive object', () => {
      const source = { a: 1, b: { c: 2, d: { e: 3 } }, g: {} };
      const child = { f: 4, h: source };
      source.g = child;

      expect(() => operator(source)).not.toThrow(RangeError);
    });
  });

  describe('Array', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = DEFAULT_ARRAY;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(4);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith(3);
    });
  });

  describe('Map', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = DEFAULT_MAP;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(10);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith([0, 'a']);
      expect(fn).toHaveBeenCalledWith(0);
      expect(fn).toHaveBeenCalledWith('a');
      expect(fn).toHaveBeenCalledWith([1, 'b']);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith('b');
      expect(fn).toHaveBeenCalledWith([2, 'c']);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith('c');
    });
  });

  describe('Set', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = DEFAULT_SET;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(4);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith(3);
    });
  });

  describe('others', () => {
    const operator = walk(fn);
    const sources = [1, 'a', true, function () {}, () => {}, new Date(), new RegExp('')] as const;

    it('should walk', () => {
      sources.forEach((source) => expect(operator(source)).toStrictEqual(source));
      expect(fn).toHaveBeenCalledTimes(sources.length);
      sources.forEach((source) => expect(fn).toHaveBeenCalledWith(source));
    });
  });
});
