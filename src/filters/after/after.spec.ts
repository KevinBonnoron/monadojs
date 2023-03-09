import { after } from './after';

describe('after', () => {
  it('should return if value is after passed date', () => {
    const operator = after(new Date('2020-01-01T00:00:00Z'));

    expect(operator(new Date('2020-02-01T00:00:00Z'))).toBeTruthy();
    expect(operator(new Date('2020-01-01T00:00:00Z'))).toBeFalsy();
  });
});
