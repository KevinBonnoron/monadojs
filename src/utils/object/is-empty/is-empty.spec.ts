import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  it('should return true', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(new Date())).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(new Set())).toBeTruthy();
    expect(isEmpty(new Map())).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isEmpty('a')).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty(false)).toBeFalsy();
    expect(isEmpty(Symbol())).toBeFalsy();
    expect(isEmpty(Promise.resolve())).toBeFalsy();
    expect(isEmpty(new RegExp(''))).toBeFalsy();
    expect(isEmpty(() => {})).toBeFalsy();
    expect(isEmpty(function () {})).toBeFalsy();
    expect(isEmpty(Just(1))).toBeFalsy();
  });
});
