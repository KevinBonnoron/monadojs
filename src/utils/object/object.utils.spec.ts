import { describe, expect, it } from 'vitest';
import { getTypeDefault } from './object.utils';

describe('ObjectUtils', () => {
  describe('getTypeDefault', () => {
    it('should return type default', () => {
      expect(getTypeDefault('a')).toStrictEqual('');
      expect(getTypeDefault(1)).toStrictEqual(0);
      expect(getTypeDefault(true)).toStrictEqual(false);
      expect(getTypeDefault(Symbol())).toStrictEqual(null);
      expect(getTypeDefault(new Date('2020-01-01'))).toStrictEqual(new Date());
      expect(getTypeDefault([0, 1])).toStrictEqual([]);
      expect(getTypeDefault(new Map([[0, 1]]))).toStrictEqual(new Map());
      expect(getTypeDefault(new Set([0, 1]))).toStrictEqual(new Set());
      expect(getTypeDefault({ a: 1 })).toStrictEqual({});
    });
  });
});
