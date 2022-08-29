import { gt } from './gt';

describe('gt', () => {
  it('should return if values are not equals', () => {
    const nullNumber: number = null as unknown as number;
    const undefinedNumber: number = undefined as unknown as number;

    expect([0, 1, 2, 3].filter(gt(1))).toStrictEqual([2, 3]);
    expect(gt(1)(2)).toBeTruthy();
    expect(gt(1)(1)).toBeFalsy();
    expect(gt(1)(0)).toBeFalsy();
    expect(gt(1)(nullNumber)).toBeFalsy();
    expect(gt(1)(undefinedNumber)).toBeFalsy();
  });
});
