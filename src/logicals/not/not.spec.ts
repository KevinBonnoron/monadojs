import { describe, expect, it } from 'vitest';
import { FALSE, TRUE } from '../../utils';
import { not } from './not';

describe('not', () => {
  it('should return not of values', () => {
    // 2 inputs
    expect(not(FALSE)(null)).toBeTruthy();
    expect(not(TRUE)(null)).toBeFalsy();
  });
});
