import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isMap } from './is-map';

describe('isMap', () => {
  it('should return true', () => {
    expect(isMap(new Map())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isMap(null)).toBeFalsy();
    expect(isMap(undefined)).toBeFalsy();
    expect(isMap('a')).toBeFalsy();
    expect(isMap(0)).toBeFalsy();
    expect(isMap(false)).toBeFalsy();
    expect(isMap(Symbol())).toBeFalsy();
    expect(isMap(new Date())).toBeFalsy();
    expect(isMap(Promise.resolve())).toBeFalsy();
    expect(isMap(new RegExp(''))).toBeFalsy();
    expect(isMap([])).toBeFalsy();
    expect(isMap(new Set())).toBeFalsy();
    expect(isMap({})).toBeFalsy();
    expect(isMap(() => {})).toBeFalsy();
    expect(isMap(function () {})).toBeFalsy();
    expect(isMap(Just(1))).toBeFalsy();
    expect(isMap(Nothing)).toBeFalsy();
  });
});
