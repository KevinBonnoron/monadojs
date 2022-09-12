import { empty } from './empty';

describe('empty', () => {
  it('should return if value is empty', () => {
    const anonymousArrowFn = () => {};
    const anonymousFn = function () {};

    expect([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn].filter(empty())).toStrictEqual([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn]);
    expect(empty()(null)).toBeTruthy();
    expect(empty()(undefined)).toBeTruthy();
    expect(empty()(1)).toBeTruthy();
    expect(empty()('a')).toBeTruthy();
    expect(empty()(true)).toBeTruthy();
    expect(empty()([])).toBeTruthy();
    expect(empty()(anonymousArrowFn)).toBeTruthy();
    expect(empty()(anonymousFn)).toBeTruthy();
    expect(empty()([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn])).toBeFalsy();
  });
});
