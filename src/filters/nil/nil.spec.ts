import { nil } from './nil';

describe('nil', () => {
  const operator = nil();

  describe('null', () => {
    it('should return true', () => {
      expect(operator(null)).toBeTruthy();
    });
  });

  describe('undefined', () => {
    it('should return true', () => {
      expect(operator(undefined)).toBeTruthy();
    });
  });

  describe('nil', () => {
    expect(operator(undefined)).toBeTruthy();
  });

  describe('others', () => {
    it('should return false', () => {
      const anonymousArrowFn = () => {};
      const anonymousFn = function () {};

      expect([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn].filter(operator)).toStrictEqual([null, undefined]);

      expect(operator(1)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator([null, undefined, 1, 'a', true, [], anonymousArrowFn, anonymousFn])).toBeFalsy();
    });
  });
});
