import { DEFAULT_DATE } from '../../../tests/test.data';
import { before } from './before';

describe('before', () => {
  it('should return if value is before passed date', () => {
    const operator = before(DEFAULT_DATE);

    expect(operator(new Date('2019-11-31T23:59:59Z'))).toBeTruthy();
    expect(operator(DEFAULT_DATE)).toBeFalsy();
  });
});
