import { DEFAULT_DATE } from '../../../tests/test.data';
import { before } from './before';

describe('before', () => {
  describe('string', () => {
    const operator = before(DEFAULT_DATE);

    it('should return true', () => {
      expect(operator('2019-11-31T23:59:59Z')).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator('2020-01-01T00:00:00Z')).toBeFalsy();
    });
  });

  describe('Date', () => {
    const operator = before(DEFAULT_DATE);

    it('should return true', () => {
      expect(operator(new Date('2019-11-31T23:59:59Z'))).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(DEFAULT_DATE)).toBeFalsy();
    });
  });
});
