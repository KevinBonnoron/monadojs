import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should return capitalize string', () => {
    expect(['abc'].map(capitalize())).toStrictEqual(['Abc']);
    expect(['abc', 'DEF'].map(capitalize())).toStrictEqual(['Abc', 'Def']);
    expect(capitalize()('abc')).toStrictEqual('Abc');
  });
});
