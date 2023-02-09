import { pop } from './pop';

describe('pop', () => {
  it('should return first element of array', () => {
    const source = [0, 1, 2, 3];
    const operator = pop();
    const expected = 3;

    expect(operator(source)).toStrictEqual(expected);
    expect(source).toStrictEqual([0, 1, 2]);
  });
});
