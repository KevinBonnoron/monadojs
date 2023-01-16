import { shift } from './shift';

describe('shift', () => {
  it('should return first element of array', () => {
    const input = [0, 1, 2, 3];
    const operator = shift();
    const expected = 0;

    expect(operator(input)).toStrictEqual(expected);
    expect(input).toStrictEqual([1, 2, 3]);
  });
});
