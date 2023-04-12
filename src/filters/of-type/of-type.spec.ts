import { describe, expect, it } from 'vitest';
import { Maybe } from '../../types';
import { Just, Nothing } from '../../utils';
import { ofType } from './of-type';

describe('of-type', () => {
  const anonymousArrowFn = () => {};
  const anonymousFn = function () {};
  const emptyResolvedPromise = Promise.resolve();

  describe('null', () => {
    const operator = ofType(null);

    it('should return true', () => {
      expect(operator(null)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const operator = ofType(undefined);

    it('should return true', () => {
      expect(operator(undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('string', () => {
    const operator = ofType(String);

    it('should return true', () => {
      expect(operator('a')).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('number', () => {
    const operator = ofType(Number);

    it('should return true', () => {
      expect(operator(0)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const operator = ofType(Boolean);

    it('should return true', () => {
      expect(operator(true)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('symbol', () => {
    const operator = ofType(Symbol);

    it('should return true', () => {
      expect(operator(Symbol())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const operator = ofType(Date);

    it('should return true', () => {
      expect(operator(new Date())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Promise', () => {
    const operator = ofType(Promise);

    it('should return true', () => {
      expect(operator(emptyResolvedPromise)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('RegExp', () => {
    const operator = ofType(RegExp);

    it('should return true', () => {
      expect(operator(new RegExp(''))).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const operator = ofType(Array);

    it('should return true', () => {
      expect(operator([])).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const operator = ofType(Set);

    it('should return true', () => {
      expect(operator(new Set())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const operator = ofType(Map);

    it('should return true', () => {
      expect(operator(new Map())).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Object', () => {
    const operator = ofType(Object);

    it('should return true', () => {
      expect(operator(new Date())).toBeTruthy();
      expect(operator(emptyResolvedPromise)).toBeTruthy();
      expect(operator(new RegExp(''))).toBeTruthy();
      expect(operator(new Set())).toBeTruthy();
      expect(operator(new Map())).toBeTruthy();
      expect(operator({})).toBeTruthy();
      expect(operator(Just(1))).toBeTruthy();
      expect(operator(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator([])).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
    });
  });

  describe('Function', () => {
    const operator = ofType(Function);

    it('should return true', () => {
      expect(operator(anonymousArrowFn)).toBeTruthy();
      expect(operator(anonymousFn)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(Just(1))).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Maybe', () => {
    const operator = ofType(Maybe);

    it('should return true', () => {
      expect(operator(Just(1))).toBeTruthy();
      expect(operator(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(Symbol())).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(emptyResolvedPromise)).toBeFalsy();
      expect(operator(new RegExp(''))).toBeFalsy();
      expect(operator([])).toBeFalsy();
      expect(operator(new Set())).toBeFalsy();
      expect(operator(new Map())).toBeFalsy();
      expect(operator({})).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
    });
  });
});
