import { describe, expect, it } from 'vitest';
import { nil } from '../../filters';
import { filter, throwError } from '../../operators';
import { FALSE, TRUE } from '../../utils';
import { or } from './or';

describe('or', () => {
  it('should return or of values', () => {
    // 2 inputs
    expect(or(FALSE, FALSE)(null)).toBeFalsy();
    expect(or(FALSE, TRUE)(null)).toBeTruthy();
    expect(or(TRUE, FALSE)(null)).toBeTruthy();
    expect(or(TRUE, TRUE)(null)).toBeTruthy();
    // 3 inputs
    expect(or(FALSE, FALSE, FALSE)(null)).toBeFalsy();
    expect(or(FALSE, FALSE, TRUE)(null)).toBeTruthy();
    expect(or(FALSE, TRUE, FALSE)(null)).toBeTruthy();
    expect(or(FALSE, TRUE, TRUE)(null)).toBeTruthy();
    expect(or(TRUE, FALSE, FALSE)(null)).toBeTruthy();
    expect(or(TRUE, FALSE, TRUE)(null)).toBeTruthy();
    expect(or(TRUE, TRUE, FALSE)(null)).toBeTruthy();
    expect(or(TRUE, TRUE, TRUE)(null)).toBeTruthy();
  });

  it('should return when one operand is true', () => {
    filter(or(nil(), throwError(new Error('should not happend'))))(undefined);
  });
});
