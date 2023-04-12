import { describe, expect, it } from 'vitest';
import { curry, uncurry } from './curry.utils';

describe('CurryUtils', () => {
  it('should curry a function', () => {
    const add = (a: number, b: number, c: number = 0) => a + b + c;
    const curryAdd = curry(add);
    expect(curryAdd(1)).toEqual(expect.any(Function));
    expect(curryAdd(1)(2)).toStrictEqual(3);
    expect(curryAdd(1, 2, 3)).toStrictEqual(6);
    expect(curryAdd(1)(2, 3)).toStrictEqual(6);
    expect(curryAdd(1)(2)).toStrictEqual(3);
  });

  it('should uncurry a function', () => {
    const add = (a: number) => (b: number) => a + b;
    const uncurryAdd = uncurry(add);
    expect(uncurryAdd(1, 2)).toStrictEqual(3);
  });
});
