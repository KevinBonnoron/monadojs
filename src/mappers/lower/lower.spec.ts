import { describe, expect, it } from 'vitest';
import { lower } from './lower';

describe('lower', () => {
  it('should return lowercase string', () => {
    expect(['Abc', 'DEF'].map(lower())).toStrictEqual(['abc', 'def']);
    expect(lower()('Abc')).toStrictEqual('abc');
  });
});
