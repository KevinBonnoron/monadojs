import { one } from './one';

describe('one', () => {
  const array: any[] = [];
  const object = {};
  const source = [1, 'a', true, object, array, null, undefined, 'a'];

  it('should return if one element matches filter', () => {
    expect(one((value: any) => value === 1)(source)).toBeTruthy();
    expect(one((value: any) => value === 0)(source)).toBeFalsy();
    expect(one((value: any) => value === 'a')(source)).toBeFalsy();
    expect(one((value: any) => value === 'a')('a')).toBeTruthy();
    expect(one((value: any) => value === 'a')(1)).toBeFalsy();
  });

  it('should return if one element matches value', () => {
    expect(one(1)(source)).toBeTruthy();
    expect(one(0)(source)).toBeFalsy();
    expect(one('a')(source)).toBeFalsy();
    expect(one('a')('a')).toBeTruthy();
    expect(one('a')(1)).toBeFalsy();
  });
});
