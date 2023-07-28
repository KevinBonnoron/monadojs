import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { toArray } from './to-array';

describe('toArray', () => {
  it('should return array', () => {
    expect(toArray(null)).toStrictEqual([]);
    expect(toArray(undefined)).toStrictEqual([]);
    expect(toArray('a')).toStrictEqual(['a']);
    expect(toArray(0)).toStrictEqual([0]);
    expect(toArray(true)).toStrictEqual([true]);
    expect(toArray(DEFAULT_SYMBOL)).toStrictEqual([DEFAULT_SYMBOL]);
    expect(toArray(DEFAULT_DATE)).toStrictEqual([DEFAULT_DATE]);
    expect(toArray(EMPTY_RESOLVED_PROMISE)).toStrictEqual([EMPTY_RESOLVED_PROMISE]);
    expect(toArray(DEFAULT_REGEX)).toStrictEqual([DEFAULT_REGEX]);
    expect(toArray(NUMBER_ARRAY)).toStrictEqual(NUMBER_ARRAY);
    expect(toArray(NUMBER_SET)).toStrictEqual([...NUMBER_SET]);
    expect(toArray(NUMBER_MAP)).toStrictEqual([...NUMBER_MAP]);
    expect(toArray(EMPTY_PLAIN_OBJECT)).toStrictEqual([EMPTY_PLAIN_OBJECT]);
    expect(toArray(anonymousArrowFn)).toStrictEqual([anonymousArrowFn]);
    expect(toArray(anonymousFn)).toStrictEqual([anonymousFn]);
    expect(toArray(DEFAULT_MAYBE)).toStrictEqual([DEFAULT_MAYBE]);
    expect(toArray(Nothing)).toStrictEqual([Nothing]);
  });
});
