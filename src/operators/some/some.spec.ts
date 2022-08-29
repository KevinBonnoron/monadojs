import { some } from './some';

describe('some', () => {
  it('should return if some element matches', () => {
    const array: any[] = [];
    const object = {};

    expect(some((value) => value === 1)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === 'a')([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === true)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === object)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === array)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === null)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === undefined)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === 0)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
  });
});
