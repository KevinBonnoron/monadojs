import { lte } from './lte';

describe('lte', () => {
  it('should return if values are not equals', () => {
    const nullNumber: number = null as unknown as number;
    const undefinedNumber: number = undefined as unknown as number;

    expect([0, 1, 2, 3].filter(lte(1))).toStrictEqual([0, 1]);
    expect(lte(1)(0)).toBeTruthy();
    expect(lte(1)(1)).toBeTruthy();
    expect(lte(1)(2)).toBeFalsy();
    expect(lte(1)(nullNumber)).toBeFalsy();
    expect(lte(1)(undefinedNumber)).toBeFalsy();
  });
});
