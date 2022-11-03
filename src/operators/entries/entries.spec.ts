import { entries } from './entries';

describe('entries', () => {
  it('should return object entries', () => {
    const anonymousFn = function () {};
    const anonymousArrayFn = () => {};

    expect(entries()({ a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrayFn })).toStrictEqual([
      ['a', 1],
      ['b', true],
      ['c', 'a'],
      ['d', []],
      ['e', {}],
      ['f', anonymousFn],
      ['g', anonymousArrayFn],
    ]);
  });
});
