import { values } from './values';

describe('values', () => {
  const anonymousFn = function () {};
  const anonymousArrayFn = () => {};

  it('should return array values', () => {
    const input = [1, true, 'a', [], {}, anonymousFn, anonymousArrayFn];
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrayFn];

    expect(operator(input)).toStrictEqual(expected);
  });

  it('should return map values', () => {
    const input = new Map<any, any>([
      ['a', 1],
      ['b', true],
      ['c', 'a'],
      ['d', []],
      ['e', {}],
      ['f', anonymousFn],
      ['g', anonymousArrayFn],
    ]);
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrayFn];
    expect(operator(input)).toStrictEqual(expected);
  });

  it('should return set values', () => {
    const input = new Set([1, true, 'a', [], {}, anonymousFn, anonymousArrayFn]);
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrayFn];
    expect(operator(input)).toStrictEqual(expected);
  });

  it('should return object values', () => {
    const input = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrayFn };
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrayFn];

    expect(operator(input)).toStrictEqual(expected);
  });
});
