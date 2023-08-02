import { describe, expect, it } from 'vitest';
import { math } from '../../mappers';
import { applySpec } from './apply-spec';

describe('spec', () => {
  it('should apply spec to object', () => {
    expect(applySpec({ sum: math.plus, multiply: math.times })([1, 2, 3, 4])).toStrictEqual({ sum: 10, multiply: 24 });
  });
});
