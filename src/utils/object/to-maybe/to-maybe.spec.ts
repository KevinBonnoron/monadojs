import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { toMaybe } from './to-maybe';

describe('toMaybe', () => {
  it('should return Maybe', () => {
    expect(toMaybe(null)).toStrictEqual(Nothing);
    expect(toMaybe(undefined)).toStrictEqual(Nothing);
    expect(toMaybe('a')).toStrictEqual(Just('a'));
    expect(toMaybe(0)).toStrictEqual(Just(0));
    expect(toMaybe(true)).toStrictEqual(Just(true));
    expect(toMaybe(DEFAULT_SYMBOL)).toStrictEqual(Just(DEFAULT_SYMBOL));
    expect(toMaybe(DEFAULT_DATE)).toStrictEqual(Just(DEFAULT_DATE));
    expect(toMaybe(EMPTY_RESOLVED_PROMISE)).toStrictEqual(Just(EMPTY_RESOLVED_PROMISE));
    expect(toMaybe(DEFAULT_REGEX)).toStrictEqual(Just(DEFAULT_REGEX));
    expect(toMaybe(NUMBER_ARRAY)).toStrictEqual(Just(NUMBER_ARRAY));
    expect(toMaybe(NUMBER_SET)).toStrictEqual(Just(NUMBER_SET));
    expect(toMaybe(NUMBER_MAP)).toStrictEqual(Just(NUMBER_MAP));
    expect(toMaybe(EMPTY_PLAIN_OBJECT)).toStrictEqual(Just(EMPTY_PLAIN_OBJECT));
    expect(toMaybe(anonymousArrowFn)).toStrictEqual(Just(anonymousArrowFn));
    expect(toMaybe(anonymousFn)).toStrictEqual(Just(anonymousFn));
    expect(toMaybe(DEFAULT_MAYBE)).toStrictEqual(DEFAULT_MAYBE);
    expect(toMaybe(Nothing)).toStrictEqual(Nothing);
  });
});
