import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { toDate } from './to-date';

describe('toDate', () => {
  it('should return Date', () => {
    expect(toDate(null)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(undefined)).toStrictEqual(new Date(Number.NaN));
    expect(toDate('a')).toStrictEqual(new Date(Number.NaN));
    expect(toDate(0)).toStrictEqual(new Date(0));
    expect(toDate(true)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(DEFAULT_SYMBOL)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(DEFAULT_DATE)).toStrictEqual(DEFAULT_DATE);
    expect(toDate(EMPTY_RESOLVED_PROMISE)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(DEFAULT_REGEX)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(NUMBER_ARRAY)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(NUMBER_SET)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(NUMBER_MAP)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(EMPTY_PLAIN_OBJECT)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(anonymousArrowFn)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(anonymousFn)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(DEFAULT_MAYBE)).toStrictEqual(new Date(Number.NaN));
    expect(toDate(Nothing)).toStrictEqual(new Date(Number.NaN));
  });
});
