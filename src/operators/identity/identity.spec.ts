import { describe, expect, it } from 'vitest';
import { identity } from './identity';

describe('identity', () => {
  it('should return passed value', () => {
    expect(identity()(1)).toStrictEqual(1);
  });
});
