import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { ensure } from './ensure';

describe('ensure', () => {
  it('should not throw error', () => {
    expect(() => ensure('a')).not.toThrowError();
    expect(() => ensure(0)).not.toThrowError();
    expect(() => ensure(true)).not.toThrowError();
    expect(() => ensure(DEFAULT_SYMBOL)).not.toThrowError();
    expect(() => ensure(DEFAULT_DATE)).not.toThrowError();
    expect(() => ensure(EMPTY_RESOLVED_PROMISE)).not.toThrowError();
    expect(() => ensure(DEFAULT_REGEX)).not.toThrowError();
    expect(() => ensure(EMPTY_ARRAY)).not.toThrowError();
    expect(() => ensure(EMPTY_SET)).not.toThrowError();
    expect(() => ensure(EMPTY_MAP)).not.toThrowError();
    expect(() => ensure(EMPTY_PLAIN_OBJECT)).not.toThrowError();
    expect(() => ensure(anonymousArrowFn)).not.toThrowError();
    expect(() => ensure(anonymousFn)).not.toThrowError();
    expect(() => ensure(Just(1))).not.toThrowError();
    expect(() => ensure(Nothing)).not.toThrowError();
  });

  it('should not throw error if defaultValue is passed', () => {
    expect(() => ensure(null, {})).not.toThrowError();
    expect(() => ensure(undefined, {})).not.toThrowError();
  });

  it('should return defaultValue', () => {
    expect(ensure(null, {})).toStrictEqual({});
    expect(ensure(null, { defaultValue: 'test' })).toStrictEqual('test');
    expect(ensure(null, { defaultValue: 'test', other: 'a' })).toStrictEqual({ defaultValue: 'test', other: 'a' });
  });

  it('should throw error', () => {
    expect(() => ensure(null)).toThrowError();
    expect(() => ensure(undefined)).toThrowError();
  });

  it('should throw specified error', () => {
    expect(() => ensure(null)).toThrowError('Value required');
    expect(() => ensure(null, new Error('Custom error'))).toThrowError('Custom error');
  });
});
