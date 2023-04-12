import { describe, expect, it } from 'vitest';
import { prop } from '../../mappers';
import { unique } from './unique';

describe('unique', () => {
  describe('Array', () => {
    it('should return unique primitive values', () => {
      const source = ['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b'];
      const operator = unique();
      const expected = ['b', 0, false, 1, 2, 'a', true, 3, 4];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b']);
    });

    it('should return unique object values', () => {
      const source = [
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 }
      ];
      const operator = unique(prop('a'));
      const expected = [
        { a: 1, b: 2 },
        { a: 2, b: 2 }
      ];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 }
      ]);
    });
  });

  describe('Set', () => {
    it('should return unique primitive values', () => {
      const source = new Set(['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b']);
      const operator = unique();
      const expected = new Set(['b', 0, false, 1, 2, 'a', true, 3, 4]);

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set(['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b']));
    });

    it('should return unique object values', () => {
      const source = new Set([
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 }
      ]);
      const operator = unique(prop('a'));
      const expected = new Set([
        { a: 1, b: 2 },
        { a: 2, b: 2 }
      ]);

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Set([
          { a: 1, b: 2 },
          { a: 2, b: 2 },
          { a: 1, b: 1 }
        ])
      );
    });
  });

  describe('Map', () => {
    it('should return unique primitive values', () => {
      const source = new Map([
        [0, 1],
        [1, 1],
        [2, 2]
      ]);
      const operator = unique();
      const expected = new Map([
        [0, 1],
        [2, 2]
      ]);

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [0, 1],
          [1, 1],
          [2, 2]
        ])
      );
    });

    it('should return unique primitive values', () => {
      const source = new Map([
        [0, { a: 1, b: 2 }],
        [1, { a: 2, b: 2 }],
        [2, { a: 1, b: 1 }]
      ]);
      const operator = unique(prop('a'));
      const expected = new Map([
        [0, { a: 1, b: 2 }],
        [1, { a: 2, b: 2 }]
      ]);

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [0, { a: 1, b: 2 }],
          [1, { a: 2, b: 2 }],
          [2, { a: 1, b: 1 }]
        ])
      );
    });
  });
});
