import { describe, expect, it } from 'vitest';
import { isType } from './is-type';

class Dummy {}

describe('isType', () => {
  // TODO: add more expectations
  it('should return true', () => {
    expect(isType(Dummy)(new Dummy())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isType(Dummy)({})).toBeFalsy();
  });
});
