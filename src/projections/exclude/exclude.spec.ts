import { exclude } from './exclude';

describe('exclude', () => {
  const operator = exclude('a');

  it('should exclude properties from array', () => {
    const input = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];
    const expected = [
      { b: 2, c: 3 },
      { b: 5, c: 6 },
    ];

    expect(operator(input)).toStrictEqual(expected);
    expect(input).toStrictEqual([
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ]);
  });

  it('should exclude properties from object', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expected = { b: 2, c: 3 };

    expect(operator(input)).toStrictEqual(expected);
    expect(input).toStrictEqual({ a: 1, b: 2, c: 3 });
  });
});
