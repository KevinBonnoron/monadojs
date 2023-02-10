import { some } from './some';

describe('some', () => {
  const array: any[] = [];
  const object = {};
  const source = [1, 'a', true, object, array, null, undefined];

  it('should return if some elements matches filter', () => {
    expect(some((value: any) => value === 1)(source)).toBeTruthy();
    expect(some((value: any) => value === 'a')(source)).toBeTruthy();
    expect(some((value: any) => value === true)(source)).toBeTruthy();
    expect(some((value: any) => value === object)(source)).toBeTruthy();
    expect(some((value: any) => value === array)(source)).toBeTruthy();
    expect(some((value: any) => value === null)(source)).toBeTruthy();
    expect(some((value: any) => value === undefined)(source)).toBeTruthy();
    expect(some((value: any) => value === 0)(source)).toBeFalsy();
  });

  it('should return if some elements matches value', () => {
    expect(some(1)(source)).toBeTruthy();
    expect(some('a')(source)).toBeTruthy();
    expect(some(true)(source)).toBeTruthy();
    expect(some(object)(source)).toBeTruthy();
    expect(some(array)(source)).toBeTruthy();
    expect(some(null)(source)).toBeTruthy();
    expect(some(undefined)(source)).toBeTruthy();
    expect(some(0)(source)).toBeFalsy();
  });
});
