import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { ɵcopyCollection } from './collection.utils';

describe('CollectionUtils', () => {
  describe.each([
    { collection: NUMBER_ARRAY, values: [3], expected: [3] },
    { collection: NUMBER_SET, values: [3], expected: new Set([3]) },
    { collection: NUMBER_MAP, values: [[0, 3]], expected: new Map([[0, 3]]) },
  ])('ɵcopyCollection', ({ collection, values, expected }) => {
    it('should copy', () => {
      expect(ɵcopyCollection<unknown>(collection, values)).toStrictEqual(expected);
    });
  });
});
