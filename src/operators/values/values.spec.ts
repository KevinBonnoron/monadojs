import { values } from './values';

describe('values', () => {
  const anonymousFn = function () {};
  const anonymousArrayFn = () => {};

  it('should return array values', () => {
    expect(values()([1, true, 'a', [], {}, anonymousFn, anonymousArrayFn])).toStrictEqual([1, true, 'a', [], {}, anonymousFn, anonymousArrayFn]);
  });

  it('should return map values', () => {
    expect(
      values()(
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
    ).toStrictEqual([1, true, 'a', [], {}, anonymousFn, anonymousArrayFn]);
  });

  it('should return object values', () => {
    expect(values()({ a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrayFn })).toStrictEqual([
      1,
      true,
      'a',
      [],
      {},
      anonymousFn,
      anonymousArrayFn,
    ]);
  });
});
