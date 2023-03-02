import { merge } from './merge';

describe('merge', () => {
  it('should merge values', () => {
    const operator = merge({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    expect(operator({ a: 1 })).toEqual({ a: 1, b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    expect(operator({ b: 1 })).toEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    expect(operator({ e: [{ g: 5 }] })).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
  });
});
