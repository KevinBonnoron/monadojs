import { describe, expect, it } from 'vitest';
import { haveSamePropertyNames } from './have-same-property-names';

describe('haveSamePropertyNames', () => {
  it('should return true', () => {
    expect(haveSamePropertyNames({}, {})).toBeTruthy();
    expect(haveSamePropertyNames({ a: 1, b: 1 }, { a: 1, b: 2 })).toBeTruthy();
  });

  it('should return false', () => {
    expect(haveSamePropertyNames({ a: 1 }, {})).toBeFalsy();
    expect(haveSamePropertyNames({}, { b: 1 })).toBeFalsy();
    expect(haveSamePropertyNames({ a: 1 }, { b: 1 })).toBeFalsy();
    expect(haveSamePropertyNames({ a: 1 }, { a: 1, b: 1 })).toBeFalsy();
  });
});
