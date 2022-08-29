import { concat } from './concat';

describe('concat', () => {
  it('should concat values', () => {
    expect(concat(['a'])(['b'])).toStrictEqual(['b', 'a']);
    expect(concat(['a'])('b')).toStrictEqual(['b', 'a']);
    expect(concat([['a', 'c'], ['d']])(['b'])).toStrictEqual(['b', ['a', 'c'], ['d']]);
  });
});
