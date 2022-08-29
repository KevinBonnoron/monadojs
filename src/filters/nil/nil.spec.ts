import { nil } from './nil';

describe('nil', () => {
  it('should return if value is of specified type', () => {
    const anonymousArrowFn = () => {};
    const anonymousFn = function () {};

    expect([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn].filter(nil())).toStrictEqual([null, undefined]);
  });
});
