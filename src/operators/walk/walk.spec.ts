import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_PLAIN_OBJECT,
  DEFAULT_REGEX,
  EMPTY_PLAIN_OBJECT,
  NUMBER_ARRAY, NUMBER_SET, STRING_MAP, anonymousArrowFn, anonymousFn
} from '../../../tests/test.data';
import { walk } from './walk';

describe('walk', () => {
  const fn = vi.fn(anonymousArrowFn);

  beforeEach(() => fn.mockRestore());

  describe('Array', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = NUMBER_ARRAY;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(source);
    });
  });

  describe('Set', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = NUMBER_SET;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(source);
    });
  });

  describe('Map', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = STRING_MAP;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(source);
    });
  });

  describe('PlainObject', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = DEFAULT_PLAIN_OBJECT;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(4);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith(3);
    });

    it('should walk with recursive object', () => {
      const source = { a: 1, b: { c: 2, d: { e: 3 } }, g: EMPTY_PLAIN_OBJECT };
      const child = { f: 4, h: source };
      source.g = child;

      expect(() => operator(source)).not.toThrow(RangeError);
    });
  });

  describe('others', () => {
    const operator = walk(fn);
    const sources = [1, 'a', true, anonymousFn, anonymousArrowFn, DEFAULT_DATE, DEFAULT_REGEX] as const;

    it('should walk', () => {
      sources.forEach((source) => expect(operator(source)).toStrictEqual(source));
      expect(fn).toHaveBeenCalledTimes(sources.length);
      sources.forEach((source) => expect(fn).toHaveBeenCalledWith(source));
    });
  });
});
