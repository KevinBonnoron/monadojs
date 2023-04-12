import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isPromise } from './is-promise';

describe('isPromise', () => {
  it('should return true', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy();
    // TODO: it trigger an ERR_UNHANDLED_REJECTION
    // expect(isPromise(Promise.reject())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPromise(null)).toBeFalsy();
    expect(isPromise(undefined)).toBeFalsy();
    expect(isPromise('a')).toBeFalsy();
    expect(isPromise(0)).toBeFalsy();
    expect(isPromise(false)).toBeFalsy();
    expect(isPromise(Symbol())).toBeFalsy();
    expect(isPromise(new Date())).toBeFalsy();
    expect(isPromise(new RegExp(''))).toBeFalsy();
    expect(isPromise([])).toBeFalsy();
    expect(isPromise(new Set())).toBeFalsy();
    expect(isPromise(new Map())).toBeFalsy();
    expect(isPromise({})).toBeFalsy();
    expect(isPromise(() => {})).toBeFalsy();
    expect(isPromise(function () {})).toBeFalsy();
    expect(isPromise(Just(1))).toBeFalsy();
    expect(isPromise(Nothing)).toBeFalsy();
  });
});
