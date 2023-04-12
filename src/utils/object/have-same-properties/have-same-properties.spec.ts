import { describe, expect, it } from 'vitest';
import { haveSameProperties } from './have-same-properties';

describe('haveSameProperties', () => {
  it('should return true', () => {
    expect(haveSameProperties({}, {})).toBeTruthy();
    expect(haveSameProperties({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
  });

  it('should return false', () => {
    expect(haveSameProperties({ a: 1 }, {})).toBeFalsy();
    expect(haveSameProperties({}, { b: 2 })).toBeFalsy();
    expect(haveSameProperties({ a: 1 }, { b: 2 })).toBeFalsy();
    expect(haveSameProperties({ a: 1 }, { a: 1, b: 2 })).toBeFalsy();
  });
});
