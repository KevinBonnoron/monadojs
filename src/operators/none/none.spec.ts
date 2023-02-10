import { none } from './none';

describe('none', () => {
  const array: any[] = [];
  const object = {};
  const source = [1, 'a', true, object, array, null, undefined];

  it('should return if none element matches filter', () => {
    expect(none((value) => value === 0)(source)).toBeTruthy();
    expect(none((value) => value === 1)(source)).toBeFalsy();
    expect(none((value) => value === 'a')(source)).toBeFalsy();
    expect(none((value) => value === true)(source)).toBeFalsy();
    expect(none((value) => value === object)(source)).toBeFalsy();
    expect(none((value) => value === array)(source)).toBeFalsy();
    expect(none((value) => value === null)(source)).toBeFalsy();
    expect(none((value) => value === undefined)(source)).toBeFalsy();
  });

  it('should return if none element matches value', () => {
    expect(none(0)(source)).toBeTruthy();
    expect(none(1)(source)).toBeFalsy();
    expect(none('a')(source)).toBeFalsy();
    expect(none(true)(source)).toBeFalsy();
    expect(none(object)(source)).toBeFalsy();
    expect(none(array)(source)).toBeFalsy();
    expect(none(null)(source)).toBeFalsy();
    expect(none(undefined)(source)).toBeFalsy();
  });
});
