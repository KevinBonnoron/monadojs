import { describe, expect, it } from 'vitest';
import { NOW } from '../../../../tests/test.data';
import { accessor } from './accessor';

describe('accessor', () => {
  describe('PlainObject', () => {
    it('should return value for path', () => {
      const value = {
        a: '1',
        b: 2,
        c: {
          d: NOW
        }
      };

      expect(accessor(value, 'a').get()).toStrictEqual('1');
      expect(accessor(value, 'b').get()).toStrictEqual(2);
      expect(accessor(value, 'c').get()).toStrictEqual({ d: NOW });
    });

    it('should update value for path', () => {
      const value = {
        a: '1',
        b: 2,
        c: {
          d: NOW
        }
      };

      accessor(value, 'a').set('2');
      expect(value.a).toStrictEqual('2');
    });
  });
});