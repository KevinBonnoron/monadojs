import { none } from './none';

describe('none', () => {
  it('should return if none element matches', () => {
    const array: any[] = [];
    const object = {};

    expect(none((value) => value === 0)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(none((value) => value === 1)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === 'a')([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === true)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === object)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === array)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === null)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
    expect(none((value) => value === undefined)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
  });
});
