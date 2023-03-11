import { DEFAULT_DATE } from '../../../tests/test.data';
import { after } from './after';

describe('after', () => {
  it('should return if value is after passed date', () => {
    const operator = after(DEFAULT_DATE);

    expect(operator(new Date('2020-02-01T00:00:00Z'))).toBeTruthy();
    expect(operator(DEFAULT_DATE)).toBeFalsy();
  });
});
