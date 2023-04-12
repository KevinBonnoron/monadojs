import { describe, expect, it } from 'vitest';
import { isFalse, isTrue } from '../../utils';
import { iif } from './iif';

const mapTo = (value: string) => () => value;

describe('iif', () => {
  it('should return trueValue when condition is met', () => {
    expect(iif(isTrue, mapTo('a'))(true)).toEqual('a');
    expect(iif(isFalse, mapTo('a'))(true)).toEqual(undefined);
  });

  it('should return trueValue when condition is met else falseValue', () => {
    expect(iif(isTrue, mapTo('a'), mapTo('b'))(true)).toEqual('a');
    expect(iif(isFalse, mapTo('a'), mapTo('b'))(true)).toEqual('b');
  });
});
