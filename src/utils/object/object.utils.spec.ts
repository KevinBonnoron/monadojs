import { describe, expect, it, vitest } from 'vitest';
import { DEFAULT_DATE, DEFAULT_SYMBOL, DIVERSE_ARRAY, DIVERSE_MAP, DIVERSE_SET } from '../../../tests/test.data';
import { getTypeDefault } from './object.utils';

describe('ObjectUtils', () => {
  vitest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

  describe('getTypeDefault', () => {
    it('should return type default', () => {
      expect(getTypeDefault('a')).toStrictEqual('');
      expect(getTypeDefault(1)).toStrictEqual(0);
      expect(getTypeDefault(true)).toStrictEqual(false);
      expect(getTypeDefault(DEFAULT_SYMBOL)).toStrictEqual(null);
      expect(getTypeDefault(DEFAULT_DATE)).toStrictEqual(new Date('2020-01-01'));
      expect(getTypeDefault(DIVERSE_ARRAY)).toStrictEqual([]);
      expect(getTypeDefault(DIVERSE_SET)).toStrictEqual(new Set());
      expect(getTypeDefault(DIVERSE_MAP)).toStrictEqual(new Map());
      expect(getTypeDefault({ a: 1 })).toStrictEqual({});
    });
  });
});
