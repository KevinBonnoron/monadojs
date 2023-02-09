import { shift } from './shift';

describe('shift', () => {
  it('should return first element of array', () => {
    const source = [0, 1, 2, 3];
    const operator = shift();
    const expected = 0;

    expect(operator(source)).toStrictEqual(expected);
    expect(source).toStrictEqual([1, 2, 3]);
  });
});
