import { iin } from './iin';

describe('iin', () => {
  it('should return if value is in array', () => {
    const operator = iin([1, 2, 3]);

    expect(operator(1)).toBeTruthy();
    expect(operator(0)).toBeFalsy();
  });

  it('should return if value is in map', () => {
    const operator = iin(
      new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ])
    );

    expect(operator(1)).toBeTruthy();
    expect(operator(0)).toBeFalsy();
  });

  it('should return if value is in set', () => {
    const operator = iin(new Set([1, 2, 3]));

    expect(operator(1)).toBeTruthy();
    expect(operator(0)).toBeFalsy();
  });
});
