import { empty } from './empty';

describe('empty', () => {
  const anonymousArrowFn = () => {};
  const anonymousFn = function () {};
  const operator = empty();

  describe('string', () => {
    it('should return true', () => {
      expect(operator('')).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
    });
  });

  describe('number', () => {
    it('should return false', () => {
      expect(operator(0)).toBeFalsy();
      expect(operator(1)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    it('should return false', () => {
      expect(operator(true)).toBeFalsy();
      expect(operator(false)).toBeFalsy();
    });
  });

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

  describe('PlainObject', () => {
    it('should return true', () => {
      expect(operator({})).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator({ a: 'a' })).toBeFalsy();
      expect(operator({ a: 1 })).toBeFalsy();
      expect(operator({ a: true })).toBeFalsy();
      expect(operator({ a: false })).toBeFalsy();
      expect(operator({ a: null })).toBeFalsy();
      expect(operator({ a: undefined })).toBeFalsy();
      expect(operator({ a: {} })).toBeFalsy();
      expect(operator({ a: anonymousArrowFn })).toBeFalsy();
      expect(operator({ a: anonymousFn })).toBeFalsy();
    });
  });

  describe('Array', () => {
    it('should return true', () => {
      expect(operator([])).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(['a'])).toBeFalsy();
      expect(operator([1])).toBeFalsy();
      expect(operator([true])).toBeFalsy();
      expect(operator([false])).toBeFalsy();
      expect(operator([null])).toBeFalsy();
      expect(operator([undefined])).toBeFalsy();
      expect(operator([{}])).toBeFalsy();
      expect(operator([anonymousArrowFn])).toBeFalsy();
      expect(operator([anonymousFn])).toBeFalsy();
    });
  });

  describe('Set', () => {
    it('should return true', () => {
      expect(operator(new Set())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(new Set(['a']))).toBeFalsy();
      expect(operator(new Set([1]))).toBeFalsy();
      expect(operator(new Set([true]))).toBeFalsy();
      expect(operator(new Set([false]))).toBeFalsy();
      expect(operator(new Set([null]))).toBeFalsy();
      expect(operator(new Set([undefined]))).toBeFalsy();
      expect(operator(new Set([{}]))).toBeFalsy();
      expect(operator(new Set([anonymousArrowFn]))).toBeFalsy();
      expect(operator(new Set([anonymousFn]))).toBeFalsy();
    });
  });

  describe('Map', () => {
    it('should return true', () => {
      expect(operator(new Map())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(new Map([[0, 'a']]))).toBeFalsy();
      expect(operator(new Map([[0, 1]]))).toBeFalsy();
      expect(operator(new Map([[0, true]]))).toBeFalsy();
      expect(operator(new Map([[0, false]]))).toBeFalsy();
      expect(operator(new Map([[0, null]]))).toBeFalsy();
      expect(operator(new Map([[0, undefined]]))).toBeFalsy();
      expect(operator(new Map([[0, {}]]))).toBeFalsy();
      expect(operator(new Map([[0, anonymousArrowFn]]))).toBeFalsy();
      expect(operator(new Map([[0, anonymousFn]]))).toBeFalsy();
    });
  });
});
