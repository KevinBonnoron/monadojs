import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { toFunction } from './to-function';

describe('toFunction', () => {
  it('should return Function', () => {
    expect(toFunction(null)).toStrictEqual(expect.any(Function));
    expect(toFunction(undefined)).toStrictEqual(expect.any(Function));
    expect(toFunction('a')).toStrictEqual(expect.any(Function));
    expect(toFunction(0)).toStrictEqual(expect.any(Function));
    expect(toFunction(true)).toStrictEqual(expect.any(Function));
    expect(toFunction(DEFAULT_SYMBOL)).toStrictEqual(expect.any(Function));
    expect(toFunction(DEFAULT_DATE)).toStrictEqual(expect.any(Function));
    expect(toFunction(EMPTY_RESOLVED_PROMISE)).toStrictEqual(expect.any(Function));
    expect(toFunction(DEFAULT_REGEX)).toStrictEqual(expect.any(Function));
    expect(toFunction(NUMBER_ARRAY)).toStrictEqual(expect.any(Function));
    expect(toFunction(NUMBER_SET)).toStrictEqual(expect.any(Function));
    expect(toFunction(NUMBER_MAP)).toStrictEqual(expect.any(Function));
    expect(toFunction(EMPTY_PLAIN_OBJECT)).toStrictEqual(expect.any(Function));
    expect(toFunction(anonymousArrowFn)).toStrictEqual(expect.any(Function));
    expect(toFunction(anonymousFn)).toStrictEqual(expect.any(Function));
    expect(toFunction(DEFAULT_MAYBE)).toStrictEqual(expect.any(Function));
    expect(toFunction(Nothing)).toStrictEqual(expect.any(Function));
  });
});
