import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NUMBER_ARRAY, NUMBER_SET, STRING_MAP } from '../../../tests/test.data';
import { walk } from './walk';

describe('walk', () => {
  const fn = vi.fn((value: any) => value);

  beforeEach(() => fn.mockRestore());

  describe('Array', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = NUMBER_ARRAY;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(10);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith(3);
      expect(fn).toHaveBeenCalledWith(4);
      expect(fn).toHaveBeenCalledWith(5);
      expect(fn).toHaveBeenCalledWith(6);
      expect(fn).toHaveBeenCalledWith(7);
      expect(fn).toHaveBeenCalledWith(8);
      expect(fn).toHaveBeenCalledWith(9);
    });
  });

  describe('Set', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = NUMBER_SET;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(10);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith(3);
      expect(fn).toHaveBeenCalledWith(4);
      expect(fn).toHaveBeenCalledWith(5);
      expect(fn).toHaveBeenCalledWith(6);
      expect(fn).toHaveBeenCalledWith(7);
      expect(fn).toHaveBeenCalledWith(8);
      expect(fn).toHaveBeenCalledWith(9);
    });
  });

  describe('Map', () => {
    const operator = walk(fn);

    it('should walk', () => {
      const source = STRING_MAP;

      expect(operator(source)).toStrictEqual(source);
      expect(fn).toHaveBeenCalledTimes(79);
      expect(fn).toHaveBeenCalledWith(source);
      expect(fn).toHaveBeenCalledWith([0, 'a']);
      expect(fn).toHaveBeenCalledWith(0);
      expect(fn).toHaveBeenCalledWith('a');
      expect(fn).toHaveBeenCalledWith([1, 'b']);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith('b');
      expect(fn).toHaveBeenCalledWith([2, 'c']);
      expect(fn).toHaveBeenCalledWith(2);
      expect(fn).toHaveBeenCalledWith('c');
      expect(fn).toHaveBeenCalledWith([3, 'd']);
      expect(fn).toHaveBeenCalledWith(3);
      expect(fn).toHaveBeenCalledWith('d');
      expect(fn).toHaveBeenCalledWith([4, 'e']);
      expect(fn).toHaveBeenCalledWith(4);
      expect(fn).toHaveBeenCalledWith('e');
      expect(fn).toHaveBeenCalledWith([5, 'f']);
      expect(fn).toHaveBeenCalledWith(5);
      expect(fn).toHaveBeenCalledWith('f');
      expect(fn).toHaveBeenCalledWith([6, 'g']);
      expect(fn).toHaveBeenCalledWith(6);
      expect(fn).toHaveBeenCalledWith('g');
      expect(fn).toHaveBeenCalledWith([7, 'h']);
      expect(fn).toHaveBeenCalledWith(7);
      expect(fn).toHaveBeenCalledWith('h');
      expect(fn).toHaveBeenCalledWith([8, 'i']);
      expect(fn).toHaveBeenCalledWith(8);
      expect(fn).toHaveBeenCalledWith('i');
      expect(fn).toHaveBeenCalledWith([9, 'j']);
      expect(fn).toHaveBeenCalledWith(9);
      expect(fn).toHaveBeenCalledWith('j');
      expect(fn).toHaveBeenCalledWith([10, 'k']);
      expect(fn).toHaveBeenCalledWith(10);
      expect(fn).toHaveBeenCalledWith('k');
      expect(fn).toHaveBeenCalledWith([11, 'l']);
      expect(fn).toHaveBeenCalledWith(11);
      expect(fn).toHaveBeenCalledWith('l');
      expect(fn).toHaveBeenCalledWith([12, 'm']);
      expect(fn).toHaveBeenCalledWith(12);
      expect(fn).toHaveBeenCalledWith('m');
      expect(fn).toHaveBeenCalledWith([13, 'n']);
      expect(fn).toHaveBeenCalledWith(13);
      expect(fn).toHaveBeenCalledWith('n');
      expect(fn).toHaveBeenCalledWith([14, 'o']);
      expect(fn).toHaveBeenCalledWith(14);
      expect(fn).toHaveBeenCalledWith('o');
      expect(fn).toHaveBeenCalledWith([15, 'p']);
      expect(fn).toHaveBeenCalledWith(15);
      expect(fn).toHaveBeenCalledWith('p');
      expect(fn).toHaveBeenCalledWith([16, 'q']);
      expect(fn).toHaveBeenCalledWith(16);
      expect(fn).toHaveBeenCalledWith('q');
      expect(fn).toHaveBeenCalledWith([17, 'r']);
      expect(fn).toHaveBeenCalledWith(17);
      expect(fn).toHaveBeenCalledWith('r');
      expect(fn).toHaveBeenCalledWith([18, 's']);
      expect(fn).toHaveBeenCalledWith(18);
      expect(fn).toHaveBeenCalledWith('s');
      expect(fn).toHaveBeenCalledWith([19, 't']);
      expect(fn).toHaveBeenCalledWith(19);
      expect(fn).toHaveBeenCalledWith('t');
      expect(fn).toHaveBeenCalledWith([20, 'u']);
      expect(fn).toHaveBeenCalledWith(20);
      expect(fn).toHaveBeenCalledWith('u');
      expect(fn).toHaveBeenCalledWith([21, 'v']);
      expect(fn).toHaveBeenCalledWith(21);
      expect(fn).toHaveBeenCalledWith('v');
      expect(fn).toHaveBeenCalledWith([22, 'w']);
      expect(fn).toHaveBeenCalledWith(22);
      expect(fn).toHaveBeenCalledWith('w');
      expect(fn).toHaveBeenCalledWith([23, 'x']);
      expect(fn).toHaveBeenCalledWith(23);
      expect(fn).toHaveBeenCalledWith('x');
      expect(fn).toHaveBeenCalledWith([24, 'y']);
      expect(fn).toHaveBeenCalledWith(24);
      expect(fn).toHaveBeenCalledWith('y');
      expect(fn).toHaveBeenCalledWith([25, 'z']);
      expect(fn).toHaveBeenCalledWith(25);
      expect(fn).toHaveBeenCalledWith('z');
    });
  });

  describe('PlainObject', () => {
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
