import { exclude } from './exclude';

describe('exclude', () => {
  const operator = exclude('a');

  it('should exclude properties from array', () => {
    const source = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];
    const expected = [
      { b: 2, c: 3 },
      { b: 5, c: 6 },
    ];

    expect(operator(source)).toStrictEqual(expected);
    expect(source).toStrictEqual([
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ]);
  });

  it('should exclude properties from object', () => {
    const source = { a: 1, b: 2, c: 3 };
    const expected = { b: 2, c: 3 };

    expect(operator(source)).toStrictEqual(expected);
    expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
  });
});
