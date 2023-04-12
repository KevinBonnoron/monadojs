import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isCollection } from './is-collection';

describe('isCollection', () => {
  it('should return true', () => {
    expect(isCollection([])).toBeTruthy();
    expect(isCollection(new Set())).toBeTruthy();
    expect(isCollection(new Map())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isCollection(null)).toBeFalsy();
    expect(isCollection(undefined)).toBeFalsy();
    expect(isCollection('a')).toBeFalsy();
    expect(isCollection(0)).toBeFalsy();
    expect(isCollection(true)).toBeFalsy();
    expect(isCollection(Symbol())).toBeFalsy();
    expect(isCollection(new Date())).toBeFalsy();
    expect(isCollection(Promise.resolve())).toBeFalsy();
    expect(isCollection(new RegExp(''))).toBeFalsy();
    expect(isCollection({})).toBeFalsy();
    expect(isCollection(() => {})).toBeFalsy();
    expect(isCollection(function () {})).toBeFalsy();
    expect(isCollection(Just(1))).toBeFalsy();
    expect(isCollection(Nothing)).toBeFalsy();
  });
});
