import { merge } from './merge';

describe('merge', () => {
  it('should merge values when adding property', () => {
    const source = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
    const operator = merge(source);
    expect(operator({ a: 1 })).toEqual({ a: 1, b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    expect(source).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
  });

  it('should merge values when replacing property', () => {
    const source = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
    const operator = merge(source);
    expect(operator({ b: 1 })).toEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    expect(source).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
  });

  it('should merge values when adding array property', () => {
    const source = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
    const operator = merge(source);
    expect(operator({ e: [{ g: 5 }] })).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
    expect(source).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
  });
});
