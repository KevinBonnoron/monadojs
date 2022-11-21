import { merge } from './merge';

describe('merge', () => {
  it('should merge values', () => {
    const source = { b: 2, c: { d: 3 } };
    expect(merge(source)({ a: 1 })).toEqual({ a: 1, b: 2, c: { d: 3 } });
    expect(merge(source)({ b: 1 })).toEqual({ b: 2, c: { d: 3 } });
  });
});
