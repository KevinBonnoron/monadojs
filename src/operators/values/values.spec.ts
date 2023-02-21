import { values } from './values';

describe('values', () => {
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  it('should return array values', () => {
    const source = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

    expect(operator(source)).toStrictEqual(expected);
  });

  it('should return map values', () => {
    const source = new Map<any, any>([
      ['a', 1],
      ['b', true],
      ['c', 'a'],
      ['d', []],
      ['e', {}],
      ['f', anonymousFn],
      ['g', anonymousArrowFn],
    ]);
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

    expect(operator(source)).toStrictEqual(expected);
  });

  it('should return set values', () => {
    const source = new Set([1, true, 'a', [], {}, anonymousFn, anonymousArrowFn]);
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

    expect(operator(source)).toStrictEqual(expected);
  });

  it('should return object values', () => {
    const source = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn };
    const operator = values();
    const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

    expect(operator(source)).toStrictEqual(expected);
  });
});
