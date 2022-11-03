import { pick } from './pick';

describe('pick', () => {
  it('should pick properties from object', () => {
    expect(pick<any>('a')({ a: 1, b: 2, c: 3 })).toStrictEqual({ a: 1 });
    expect(
      pick<any>('a')([
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ])
    ).toStrictEqual([{ a: 1 }, { a: 4 }]);
  });
});
