import { one } from './one';

describe('one', () => {
  it('should return if one element matches', () => {
    const array: any[] = [];
    const object = {};
    const values = [1, 'a', true, object, array, null, undefined, 'a'];

    expect(one((value) => value === 1)(values)).toBeTruthy();
    expect(one((value) => value === 0)(values)).toBeFalsy();
    expect(one((value) => value === 'a')(values)).toBeFalsy();

    expect(one((value) => value === 'a')('a')).toBeTruthy();
    expect(one((value) => value === 'a')(1)).toBeFalsy();
  });
});
