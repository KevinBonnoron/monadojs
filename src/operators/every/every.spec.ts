import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { isNumber, isString } from '../../utils';
import { every } from './every';

describe('every', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      expect(every(isNumber)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(every(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      expect(every(isNumber)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(every(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;
    const keyIsString =
      () => ([key]: [key: any]) => isString(key);
    const keyIsNumber =
      () => ([key]: [key: any]) => isNumber(key);

    it('should return true', () => {
      expect(every(keyIsNumber())(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(every(keyIsString())(source)).toBeFalsy();
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;
    const keyIsString =
      () => ([key]: [key: any]) => isString(key);
    const keyIsNumber =
      () => ([key]: [key: any]) => isNumber(key);

    it('should return true', () => {
      expect(every(keyIsString())(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(every(keyIsNumber())(source)).toBeFalsy();
    });
  });
});
