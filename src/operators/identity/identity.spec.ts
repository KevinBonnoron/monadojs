import { describe, expect, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../tests/test.data';
import { identity } from './identity';

describe('identity', () => {
  const operator = identity();

  describe('string', () => {
    it('should return passed value', () => {
      expect(operator('1')).toStrictEqual('1');
    });
  });

  describe('number', () => {
    it('should return passed value', () => {
      expect(operator(1)).toStrictEqual(1);
    });
  });

  describe('boolean', () => {
    it('should return passed value', () => {
      expect(operator(true)).toStrictEqual(true);
    });
  });

  describe('null', () => {
    it('should return passed value', () => {
      expect(operator(null)).toStrictEqual(null);
    });
  });

  describe('undefined', () => {
    it('should return passed value', () => {
      expect(operator(undefined)).toStrictEqual(undefined);
    });
  });

  describe('PlainObject', () => {
    it('should return passed value', () => {
      expect(operator(EMPTY_PLAIN_OBJECT)).toStrictEqual(EMPTY_PLAIN_OBJECT);
    });
  });

  describe('Array', () => {
    it('should return passed value', () => {
      expect(operator(EMPTY_ARRAY)).toStrictEqual(EMPTY_ARRAY);
    });
  });

  describe('Set', () => {
    it('should return passed value', () => {
      expect(operator(EMPTY_SET)).toStrictEqual(EMPTY_SET);
    });
  });

  describe('Map', () => {
    it('should return passed value', () => {
      expect(operator(EMPTY_MAP)).toStrictEqual(EMPTY_MAP);
    });
  });
});
