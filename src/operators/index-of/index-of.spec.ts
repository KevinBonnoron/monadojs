import { indexOf } from './index-of';

describe('index-of', () => {
  it('should return index of element in array', () => {
    const values = [1, 2, 3];
    const expected = 0;
    expect(indexOf(1)(values)).toStrictEqual(expected);
    expect(indexOf(0)(values)).toStrictEqual(-1);
  });

  it('should return index of element in object', () => {
    const values = { a: 1, b: 2, c: 3 };
    const expected = 'a';
    expect(indexOf(1)(values)).toStrictEqual(expected);
    expect(indexOf(0)(values)).toStrictEqual(-1);
  });
});
