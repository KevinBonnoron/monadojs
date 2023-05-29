import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT } from '../../../../tests/test.data';
import { propIn } from './prop-in';

describe('propIn', () => {
  const source = DEFAULT_PLAIN_OBJECT;

  it('should return true', () => {
    expect(propIn(source, 'a')).toBeTruthy();
    expect(propIn(source, 'b')).toBeTruthy();
    expect(propIn(source, 'c')).toBeTruthy();
    expect(propIn(source, 'a', 'b')).toBeTruthy();
    expect(propIn(source, 'a', 'b', 'c')).toBeTruthy();
  });

  it('should return false', () => {
    expect(propIn(source, 'unknownProperty')).toBeFalsy();
  });
});
