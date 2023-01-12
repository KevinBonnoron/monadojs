import { asc } from './asc';

describe('asc', () => {
  it('should sort descending array', () => {
    expect([4, 3, 1, 2, null].sort(asc({ nullsAs: 'first' }))).toStrictEqual([null, 1, 2, 3, 4]);
    expect(['d', 'c', 'a', 'b'].sort(asc())).toStrictEqual(['a', 'b', 'c', 'd']);
    expect([{ name: 'd' }, { name: 'c' }, { name: 'a' }, { name: 'b' }].sort(asc((obj: any) => obj.name))).toStrictEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }]);
    expect(asc()(2, 1)).toStrictEqual(1);
    expect(asc()(1, 2)).toStrictEqual(-1);
    expect(asc()(1, 1)).toStrictEqual(0);
  });
});
