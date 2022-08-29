import { pick } from './pick';

describe('pick', () => {
  it('should pick properties from object', () => {
    expect(pick('a')({ a: 1, b: 2, c: 3 })).toStrictEqual({ a: 1 });
  });
});
