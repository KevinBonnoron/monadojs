import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_PLAIN_OBJECT } from '../../../../tests/test.data';
import { coalesce } from './coalesce';

describe('coalesce', () => {
  it('should return first non null value', () => {
    expect(coalesce(null, undefined, 0, 'a', false, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toStrictEqual(0);
  });
});
