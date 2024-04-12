import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { toSet } from './to-set';

describe('toSet', () => {
  it('should return Set', () => {
    expect(toSet(null)).toStrictEqual(new Set());
    expect(toSet(undefined)).toStrictEqual(new Set());
    expect(toSet('a')).toStrictEqual(new Set(['a']));
    expect(toSet(0)).toStrictEqual(new Set([0]));
    expect(toSet(true)).toStrictEqual(new Set([true]));
    expect(toSet(DEFAULT_SYMBOL)).toStrictEqual(new Set([DEFAULT_SYMBOL]));
    expect(toSet(DEFAULT_DATE)).toStrictEqual(new Set([DEFAULT_DATE]));
    expect(toSet(EMPTY_RESOLVED_PROMISE)).toStrictEqual(new Set([EMPTY_RESOLVED_PROMISE]));
    expect(toSet(DEFAULT_REGEX)).toStrictEqual(new Set([DEFAULT_REGEX]));
    expect(toSet(NUMBER_ARRAY)).toStrictEqual(new Set(NUMBER_ARRAY));
    expect(toSet(NUMBER_SET)).toStrictEqual(new Set([...NUMBER_SET]));
    expect(toSet(NUMBER_MAP)).toStrictEqual(new Set([...NUMBER_MAP]));
    expect(toSet(EMPTY_PLAIN_OBJECT)).toStrictEqual(new Set([EMPTY_PLAIN_OBJECT]));
    expect(toSet(anonymousArrowFn)).toStrictEqual(new Set([anonymousArrowFn]));
    expect(toSet(anonymousFn)).toStrictEqual(new Set([anonymousFn]));
    expect(toSet(DEFAULT_MAYBE)).toStrictEqual(new Set([DEFAULT_MAYBE]));
    expect(toSet(Nothing)).toStrictEqual(new Set([Nothing]));
  });
});
