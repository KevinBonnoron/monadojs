import { empty } from './empty';

describe('empty', () => {
  it('should return if value is empty', () => {
    const anonymousArrowFn = () => {};
    const anonymousFn = function () {};

    expect([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn].filter(empty())).toStrictEqual([null, undefined, []]);
    expect(empty()(null)).toBeTruthy();
    expect(empty()(undefined)).toBeTruthy();
    expect(empty()(1)).toBeFalsy();
    expect(empty()('a')).toBeFalsy();
    expect(empty()(true)).toBeFalsy();
    expect(empty()([])).toBeTruthy();
    expect(empty()(anonymousArrowFn)).toBeFalsy();
    expect(empty()(anonymousFn)).toBeFalsy();
    expect(empty()([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn])).toBeFalsy();
  });
});
