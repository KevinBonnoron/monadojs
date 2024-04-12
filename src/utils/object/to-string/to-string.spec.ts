import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from './to-string';

describe('toDate', () => {
  it('should return string', () => {
    expect(toString(null)).toStrictEqual('null');
    expect(toString(undefined)).toStrictEqual('undefined');
    expect(toString('a')).toStrictEqual('a');
    expect(toString(0)).toStrictEqual('0');
    expect(toString(true)).toStrictEqual('true');
    expect(toString(DEFAULT_SYMBOL)).toStrictEqual('Symbol');
    expect(toString(DEFAULT_DATE)).toStrictEqual('Wed Jan 01 2020 00:00:00 GMT+0000 (Coordinated Universal Time)');
    expect(toString(EMPTY_RESOLVED_PROMISE)).toStrictEqual('[object Promise]');
    expect(toString(DEFAULT_REGEX)).toStrictEqual('/(?:)/');
    expect(toString(NUMBER_ARRAY)).toStrictEqual('1,2,3,4,5,6,7,8,9');
    expect(toString(NUMBER_SET)).toStrictEqual('[object Set]');
    expect(toString(NUMBER_MAP)).toStrictEqual('[object Map]');
    expect(toString(EMPTY_PLAIN_OBJECT)).toStrictEqual('[object Object]');
    expect(toString(anonymousArrowFn)).toStrictEqual('() => {\n}');
    expect(toString(anonymousFn)).toStrictEqual('() => {\n}');
    expect(toString(DEFAULT_MAYBE)).toStrictEqual('[object Maybe]');
    expect(toString(Nothing)).toStrictEqual('[object Maybe]');
  });
});
