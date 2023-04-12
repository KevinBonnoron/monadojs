import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of numbers', () => {
    const values = [1, 3, 2];
    expect(values.reduce(sum())).toStrictEqual(6);
  });

  it('should return the sum of string', () => {
    const values = ['a', 'c', 'b'];
    expect(values.reduce(sum())).toStrictEqual('acb');
  });
});
