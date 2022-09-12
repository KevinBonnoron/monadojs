import { neq } from './neq';

describe('neq', () => {
  it('should return if values are not equals', () => {
    const array: any[] = [];
    const object = {};

    expect(neq(1)(0)).toBeTruthy();
    expect(neq('a')('b')).toBeTruthy();
    expect(neq(array)(array)).toBeFalsy();
    expect(neq(object)(object)).toBeFalsy();
    expect(neq(null)(undefined)).toBeTruthy();
    expect(neq(undefined)(null)).toBeTruthy();
  });
});
