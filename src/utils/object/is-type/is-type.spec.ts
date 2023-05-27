import { describe, expect, it } from 'vitest';
import { EMPTY_PLAIN_OBJECT } from '../../../../tests/test.data';
import { isType } from './is-type';

class Dummy {}

describe('isType', () => {
  // TODO: add more expectations
  it('should return true', () => {
    expect(isType(Dummy)(new Dummy())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isType(Dummy)(EMPTY_PLAIN_OBJECT)).toBeFalsy();
  });
});
