import { describe, expect, it } from 'vitest';
import { prop } from '../../mappers';
import { Just, Nothing } from './maybe.utils';

describe('MaybeUtils', () => {
  it('should expect value to be Some', () => {
    const expectErrorMessage = 'value expected';

    expect(Just(0).expect(expectErrorMessage)).toStrictEqual(0);
    expect(() => Just(null).expect(expectErrorMessage)).toThrowError(expectErrorMessage);
    expect(() => Just(undefined).expect(expectErrorMessage)).toThrowError(expectErrorMessage);
    expect(() => Nothing.expect(expectErrorMessage)).toThrowError(expectErrorMessage);
  });

  it('should unwrap or throw if value is Nothing', () => {
    const unwrapErrorMessage = 'unwrap called on Nothing';

    expect(Just(0).unwrap()).toStrictEqual(0);
    expect(() => Just(null).unwrap()).toThrowError(unwrapErrorMessage);
    expect(() => Just(undefined).unwrap()).toThrowError(unwrapErrorMessage);
    expect(() => Nothing.unwrap()).toThrowError(unwrapErrorMessage);
  });

  it('should unwrap or return defaultValue if value is Nothing', () => {
    expect(Just(0).unwrapOr(1)).toStrictEqual(0);
    expect(Just(null).unwrapOr(1)).toStrictEqual(1);
    expect(Just(undefined).unwrapOr(1)).toStrictEqual(1);
    expect(Nothing.unwrapOr(1)).toStrictEqual(1);
  });

  it('should unwrap or call fallback function if value is Nothing', () => {
    const fallbackFn = () => 1;
    expect(Just(0).unwrapOrElse(fallbackFn)).toStrictEqual(0);
    expect(Just(null).unwrapOrElse(fallbackFn)).toStrictEqual(1);
    expect(Just(undefined).unwrapOrElse(fallbackFn)).toStrictEqual(1);
    expect(Nothing.unwrapOrElse(fallbackFn)).toStrictEqual(1);
  });

  it('should return value after pipe operators', () => {
    expect(Just({ a: 1 }).pipe(prop('a')).value).toStrictEqual(1);
    expect(Just({ a: 1 }).pipe(prop('b')).value).toStrictEqual(null);
    expect(Just(null).pipe(prop('b')).value).toStrictEqual(null);
    expect(Nothing.pipe(prop('a')).value).toStrictEqual(null);
  });

  it('should return if values are equals', () => {
    expect(Just(1).equals(1)).toBeTruthy();
    expect(Just(1).equals(Just(1))).toBeTruthy();
    expect(Just(1).equals(Nothing)).toBeFalsy();
    expect(Just(null).equals(1)).toBeFalsy();
    expect(Just(null).equals(Just(1))).toBeFalsy();
    expect(Just(null).equals(Nothing)).toBeTruthy();
    expect(Nothing.equals(1)).toBeFalsy();
    expect(Nothing.equals(Just(1))).toBeFalsy();
    expect(Nothing.equals(Nothing)).toBeTruthy();
  });

  it('should return if values are defined', () => {
    expect(Just(1).isJust).toBeTruthy();
    expect(Just(1).isNothing).toBeFalsy();
    expect(Just(null).isJust).toBeFalsy();
    expect(Just(null).isNothing).toBeTruthy();
    expect(Nothing.isJust).toBeFalsy();
    expect(Nothing.isNothing).toBeTruthy();
  });
});
