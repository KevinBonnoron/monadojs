import { lt } from './lt';

describe('lt', () => {
  it('should return if values are not equals', () => {
    const nullNumber: number = null as unknown as number;
    const undefinedNumber: number = undefined as unknown as number;

    expect([0, 1, 2, 3].filter(lt(1))).toStrictEqual([0]);
    expect(lt(1)(0)).toBeTruthy();
    expect(lt(1)(1)).toBeFalsy();
    expect(lt(1)(2)).toBeFalsy();
    expect(lt(1)(nullNumber)).toBeFalsy();
    expect(lt(1)(undefinedNumber)).toBeFalsy();
  });
});
