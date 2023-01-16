import { entries } from './entries';

describe('entries', () => {
  const anonymousFn = function () {};
  const anonymousArrayFn = () => {};

  it('should return array entries', () => {
    expect(entries()([1, true, 'a', [], {}, anonymousFn, anonymousArrayFn])).toStrictEqual([
      [0, 1],
      [1, true],
      [2, 'a'],
      [3, []],
      [4, {}],
      [5, anonymousFn],
      [6, anonymousArrayFn],
    ]);
  });

  it('should return map entries', () => {
    expect(
      entries()(
        new Map<any, any>([
          ['a', 1],
          ['b', true],
          ['c', 'a'],
          ['d', []],
          ['e', {}],
          ['f', anonymousFn],
          ['g', anonymousArrayFn],
        ])
      )
    ).toStrictEqual([
      ['a', 1],
      ['b', true],
      ['c', 'a'],
      ['d', []],
      ['e', {}],
      ['f', anonymousFn],
      ['g', anonymousArrayFn],
    ]);
  });

  it('should return object entries', () => {
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
