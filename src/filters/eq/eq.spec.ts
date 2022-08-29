import { eq } from './eq';

describe('eq', () => {
  it('should return if values are equals', () => {
    const array: any[] = [];
    const object = {};

    expect(eq(1)(1)).toBeTruthy();
    expect(eq('a')('a')).toBeTruthy();
    expect(eq(true)(true)).toBeTruthy();
    expect(eq(false)(false)).toBeTruthy();
    expect(eq(array)(array)).toBeTruthy();
    expect(eq(object)(object)).toBeTruthy();
    expect(eq(null)(null)).toBeTruthy();
    expect(eq(undefined)(undefined)).toBeTruthy();
    expect(eq(null)(undefined as any)).toBeFalsy();
    expect(eq(1)('1')).toBeFalsy();
    expect(eq(1, (a, b) => a == b)('1')).toBeTruthy();
  });
});
