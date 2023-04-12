import { describe, expect, it } from 'vitest';
import { coalesce } from './coalesce';

describe('coalesce', () => {
  it('should return first non null value', () => {
    expect(coalesce(null, undefined, 0, 'a', false, Symbol(), {}, [], new Date())).toStrictEqual(0);
  });
});
