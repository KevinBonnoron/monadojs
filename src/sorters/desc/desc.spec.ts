import { describe, expect, it } from 'vitest';
import { desc } from './desc';

describe('desc', () => {
  it('should sort descending array', () => {
    expect([1, 2, 4, 3, null].sort(desc({ nullsAs: 'first' }))).toStrictEqual([null, 4, 3, 2, 1]);
    expect(['a', 'b', 'd', 'c'].sort(desc())).toStrictEqual(['d', 'c', 'b', 'a']);
    expect([{ name: 'a' }, { name: 'b' }, { name: 'd' }, { name: 'c' }].sort(desc((obj) => obj.name))).toStrictEqual([{ name: 'd' }, { name: 'c' }, { name: 'b' }, { name: 'a' }]);
    expect([new Date('2020-01-01'), new Date('2020-02-01')].sort(desc())).toStrictEqual([new Date('2020-02-01'), new Date('2020-01-01')]);
    expect(desc()(1, 2)).toStrictEqual(1);
    expect(desc()(2, 1)).toStrictEqual(-1);
    expect(desc()(1, 1)).toStrictEqual(0);
  });
});
