import { some } from './some';

const array: any[] = [];
const object = {};

describe('some', () => {
  it('should return if some element matches filter', () => {
    expect(some((value) => value === 1)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === 'a')([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === true)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === object)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === array)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === null)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === undefined)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some((value) => value === 0)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
  });

  it('should return if some element matches values', () => {
    expect(some(1)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some('a')([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(true)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(object)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(array)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(null)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(undefined)([1, 'a', true, object, array, null, undefined])).toBeTruthy();
    expect(some(0)([1, 'a', true, object, array, null, undefined])).toBeFalsy();
  });
});
