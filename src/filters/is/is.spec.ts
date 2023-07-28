import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_MAYBE,
  DEFAULT_REGEX,
  DEFAULT_SYMBOL,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../tests/test.data';
import { Maybe, nil } from '../../types';
import { Nothing } from '../../utils';
import { is } from './is';

describe('is', () => {
  describe('null', () => {
    const operator = is(null);

    it('should return true', () => {
      expect(operator(null)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const operator = is(undefined);

    it('should return true', () => {
      expect(operator(undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('nil', () => {
    const operator = is(nil);

    it('should return true', () => {
      expect(operator(null)).toBeTruthy();
      expect(operator(undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('string', () => {
    const operator = is(String);

    it('should return true', () => {
      expect(operator('a')).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('number', () => {
    const operator = is(Number);

    it('should return true', () => {
      expect(operator(0)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const operator = is(Boolean);

    it('should return true', () => {
      expect(operator(true)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('symbol', () => {
    const operator = is(Symbol);

    it('should return true', () => {
      expect(operator(DEFAULT_SYMBOL)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const operator = is(Date);

    it('should return true', () => {
      expect(operator(DEFAULT_DATE)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Promise', () => {
    const operator = is(Promise);

    it('should return true', () => {
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('RegExp', () => {
    const operator = is(RegExp);

    it('should return true', () => {
      expect(operator(DEFAULT_REGEX)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const operator = is(Array);

    it('should return true', () => {
      expect(operator(EMPTY_ARRAY)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const operator = is(Set);

    it('should return true', () => {
      expect(operator(EMPTY_SET)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const operator = is(Map);

    it('should return true', () => {
      expect(operator(EMPTY_MAP)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Object', () => {
    const operator = is(Object);

    it('should return true', () => {
      expect(operator(DEFAULT_DATE)).toBeTruthy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeTruthy();
      expect(operator(DEFAULT_REGEX)).toBeTruthy();
      expect(operator(EMPTY_SET)).toBeTruthy();
      expect(operator(EMPTY_MAP)).toBeTruthy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeTruthy();
      expect(operator(DEFAULT_MAYBE)).toBeTruthy();
      expect(operator(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
    });
  });

  describe('Function', () => {
    const operator = is(Function);

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
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(DEFAULT_MAYBE)).toBeFalsy();
      expect(operator(Nothing)).toBeFalsy();
    });
  });

  describe('Maybe', () => {
    const operator = is(Maybe);

    it('should return true', () => {
      expect(operator(DEFAULT_MAYBE)).toBeTruthy();
      expect(operator(Nothing)).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(EMPTY_SET)).toBeFalsy();
      expect(operator(EMPTY_MAP)).toBeFalsy();
      expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
    });
  });
});
