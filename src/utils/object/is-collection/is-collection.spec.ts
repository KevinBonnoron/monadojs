import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_MAYBE,
  DEFAULT_REGEX,
  DEFAULT_SYMBOL,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isCollection } from './is-collection';

describe('isCollection', () => {
  it('should return true', () => {
    expect(isCollection(EMPTY_ARRAY)).toBeTruthy();
    expect(isCollection(EMPTY_SET)).toBeTruthy();
    expect(isCollection(EMPTY_MAP)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isCollection(null)).toBeFalsy();
    expect(isCollection(undefined)).toBeFalsy();
    expect(isCollection('a')).toBeFalsy();
    expect(isCollection(0)).toBeFalsy();
    expect(isCollection(true)).toBeFalsy();
    expect(isCollection(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isCollection(DEFAULT_DATE)).toBeFalsy();
    expect(isCollection(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isCollection(DEFAULT_REGEX)).toBeFalsy();
    expect(isCollection(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isCollection(anonymousArrowFn)).toBeFalsy();
    expect(isCollection(anonymousFn)).toBeFalsy();
    expect(isCollection(DEFAULT_MAYBE)).toBeFalsy();
    expect(isCollection(Nothing)).toBeFalsy();
  });
});
