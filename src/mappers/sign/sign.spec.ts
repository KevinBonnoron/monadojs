import { describe, expect, it } from 'vitest';
import { sign } from './sign';

describe('sign', () => {
  it('should return a replaced string', () => {
    expect([1, -1, 0].map(sign())).toStrictEqual([1, -1, 0]);
    expect(sign()(1)).toStrictEqual(1);
    expect(sign()(-1)).toStrictEqual(-1);
    expect(sign()(0)).toStrictEqual(0);
  });
});
