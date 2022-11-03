import { keys } from './keys';

describe('keys', () => {
  it('should return keys of values', () => {
    expect([[1, 2, 3]].map(keys())).toStrictEqual([[0, 1, 2]]);
    expect([{ a: 1, b: 2 }].map(keys())).toStrictEqual([['a', 'b']]);
    expect(keys()({ a: 1, b: 2 })).toStrictEqual(['a', 'b']);
  });
});
