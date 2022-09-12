import { encloseIn } from './enclose-in';

describe('enclose-in', () => {
  it('should take in values', () => {
    expect(encloseIn('a')([1, 2, 3])).toStrictEqual({ a: [1, 2, 3] });
    expect(encloseIn('b')({ a: [1, 2, 3] })).toStrictEqual({ b: { a: [1, 2, 3] } });
    expect(encloseIn('b')({ a: 1 })).toStrictEqual({ b: { a: 1 } });
  });
});
