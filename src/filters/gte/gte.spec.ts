import { gte } from './gte';

describe('gte', () => {
  it('should return if values are not equals', () => {
    const nullNumber: number = null as unknown as number;
    const undefinedNumber: number = undefined as unknown as number;

    expect([0, 1, 2, 3].filter(gte(1))).toStrictEqual([1, 2, 3]);
    expect(gte(1)(2)).toBeTruthy();
    expect(gte(1)(1)).toBeTruthy();
    expect(gte(1)(0)).toBeFalsy();
    expect(gte(1)(nullNumber)).toBeFalsy();
    expect(gte(1)(undefinedNumber)).toBeFalsy();
  });
});
