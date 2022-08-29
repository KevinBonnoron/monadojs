import { curry, uncurry } from './curry.utils';

describe('CurryUtils', () => {
  it('should curryfy a function', () => {
    const add = (a: number, b: number, c: number = 0) => a + b + (c ?? 0);
    const curryAdd = curry(add);
    expect(curryAdd(1)(2)()).toStrictEqual(3);
    expect(curryAdd(1)(2)(3)).toStrictEqual(6);
  });

  it('should uncurryfy a function', () => {
    const add = (a: number) => (b: number) => a + b;
    const uncurryAdd = uncurry(add);
    expect(uncurryAdd(1, 2)).toStrictEqual(3);
  });
});
