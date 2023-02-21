import { keys } from './keys';

describe('keys', () => {
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  it('should return array keys', () => {
    expect(keys()([1, true, 'a', [], {}, anonymousFn, anonymousArrowFn])).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should return map keys', () => {
    expect(
      keys()(
        new Map<any, any>([
          ['a', 1],
          ['b', true],
          ['c', 'a'],
          ['d', []],
          ['e', {}],
          ['f', anonymousFn],
          ['g', anonymousArrowFn],
        ])
      )
    ).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });

  it('should return object keys', () => {
    expect(keys()({ a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn })).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});
