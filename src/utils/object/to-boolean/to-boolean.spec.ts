import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { toBoolean } from './to-boolean';

describe('toBoolean', () => {
  it('should return boolean', () => {
    expect(toBoolean(null)).toStrictEqual(false);
    expect(toBoolean(undefined)).toStrictEqual(false);
    expect(toBoolean('a')).toStrictEqual(true);
    expect(toBoolean(0)).toStrictEqual(false);
    expect(toBoolean(true)).toStrictEqual(true);
    expect(toBoolean(DEFAULT_SYMBOL)).toStrictEqual(true);
    expect(toBoolean(DEFAULT_DATE)).toStrictEqual(true);
    expect(toBoolean(EMPTY_RESOLVED_PROMISE)).toStrictEqual(true);
    expect(toBoolean(DEFAULT_REGEX)).toStrictEqual(true);
    expect(toBoolean(NUMBER_ARRAY)).toStrictEqual(true);
    expect(toBoolean(NUMBER_SET)).toStrictEqual(true);
    expect(toBoolean(NUMBER_MAP)).toStrictEqual(true);
    expect(toBoolean(EMPTY_PLAIN_OBJECT)).toStrictEqual(true);
    expect(toBoolean(anonymousArrowFn)).toStrictEqual(true);
    expect(toBoolean(anonymousFn)).toStrictEqual(true);
    expect(toBoolean(DEFAULT_MAYBE)).toStrictEqual(true);
    expect(toBoolean(Nothing)).toStrictEqual(true);
  });
});
