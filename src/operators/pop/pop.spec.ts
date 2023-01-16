import { pop } from './pop';

describe('pop', () => {
  it('should return first element of array', () => {
    const input = [0, 1, 2, 3];
    const operator = pop();
    const expected = 3;

    expect(operator(input)).toStrictEqual(expected);
    expect(input).toStrictEqual([0, 1, 2]);
  });
});
