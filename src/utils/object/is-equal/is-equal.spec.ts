import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../../tests/test.data';
import { nil } from '../../../filters';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isEqual } from './is-equal';

describe('isEqual', () => {
  describe('null', () => {
    const value = null;

    it('should return true', () => {
      expect(isEqual(value, null)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const value = undefined;

    it('should return true', () => {
      expect(isEqual(value, undefined)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('string', () => {
    const value = 'b';

    it('should return true', () => {
      expect(isEqual(value, 'b')).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('number', () => {
    const value = 2;

    it('should return true', () => {
      expect(isEqual(value, 2)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const value = false;

    it('should return true', () => {
      expect(isEqual(value, false)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('symbol', () => {
    const value = Symbol();

    it('should return true', () => {
      expect(isEqual(value, value)).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const value = DEFAULT_DATE;

    it('should return true', () => {
      expect(isEqual(value, new Date('2020-01-01T00:00:00Z'))).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  // TODO this test isn't passing
  describe.skip('Promise', () => {
    const value = Promise.resolve('a');

    it('should return true', () => {
      expect(isEqual(value, Promise.resolve('a'))).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('RegExp', () => {
    const value = new RegExp('[a-z]+');

    it('should return true', () => {
      expect(isEqual(value, new RegExp('[a-z]+'))).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const value = NUMBER_ARRAY;

    it('should return true', () => {
      expect(isEqual(value, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const value = NUMBER_SET;

    it('should return true', () => {
      expect(isEqual(value, new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]))).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const value = NUMBER_MAP;

    it('should return true', () => {
      expect(
        isEqual(
          value,
          new Map([
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9]
          ])
        )
      ).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });

  describe('PlainObject', () => {
    const value = { a: 1 };

    it('should return true', () => {
      expect(isEqual(value, { a: 1 })).toBeTruthy();
    });

    it('should return false', () => {
      expect(isEqual(value, null)).toBeFalsy();
      expect(isEqual(value, undefined)).toBeFalsy();
      expect(isEqual(value, nil)).toBeFalsy();
      expect(isEqual(value, 'a')).toBeFalsy();
      expect(isEqual(value, 1)).toBeFalsy();
      expect(isEqual(value, true)).toBeFalsy();
      expect(isEqual(value, Symbol())).toBeFalsy();
      expect(isEqual(value, new Date())).toBeFalsy();
      expect(isEqual(value, Promise.resolve())).toBeFalsy();
      expect(isEqual(value, new RegExp(''))).toBeFalsy();
      expect(isEqual(value, [])).toBeFalsy();
      expect(isEqual(value, new Set())).toBeFalsy();
      expect(isEqual(value, new Map())).toBeFalsy();
      expect(isEqual(value, {})).toBeFalsy();
      expect(isEqual(value, () => {})).toBeFalsy();
      expect(isEqual(value, function () {})).toBeFalsy();
      expect(isEqual(value, Just(1))).toBeFalsy();
      expect(isEqual(value, Nothing)).toBeFalsy();
    });
  });
});
