import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should return capitalize string', () => {
    expect(['abc'].map(capitalize())).toStrictEqual(['Abc']);
    expect(['abc', 'DEF'].map(capitalize())).toStrictEqual(['Abc', 'Def']);
    expect(capitalize()('abc')).toStrictEqual('Abc');
    expect(capitalize()(['abc', 'DEF'])).toStrictEqual(['Abc', 'Def']);
    expect(capitalize()({ a: 'abc', b: 'DEF' })).toStrictEqual({ a: 'Abc', b: 'Def' });
  });
});
