import { nil } from './nil';

describe('nil', () => {
  it('should return if value is of specified type', () => {
    const anonymousArrowFn = () => {};
    const anonymousFn = function () {};

    expect([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn].filter(nil())).toStrictEqual([null, undefined]);
    expect(nil()(null)).toBeTruthy();
    expect(nil()(undefined)).toBeTruthy();
    expect(nil()(1)).toBeFalsy();
    expect(nil()('a')).toBeFalsy();
    expect(nil()(true)).toBeFalsy();
    expect(nil()([])).toBeFalsy();
    expect(nil()(anonymousArrowFn)).toBeFalsy();
    expect(nil()(anonymousFn)).toBeFalsy();
    expect(nil()([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn])).toBeFalsy();
  });
});
