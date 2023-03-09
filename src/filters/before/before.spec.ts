import { before } from './before';

describe('before', () => {
  it('should return if value is before passed date', () => {
    const operator = before(new Date('2020-01-01T00:00:00Z'));

    expect(operator(new Date('2019-11-31T23:59:59Z'))).toBeTruthy();
    expect(operator(new Date('2020-01-01T00:00:00Z'))).toBeFalsy();
  });
});
