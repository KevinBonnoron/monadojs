import { replace } from './replace';

describe('replace', () => {
  it('should return a replaced string', () => {
    expect(['ABC'].map(replace('A', 'C'))).toStrictEqual(['CBC']);
    expect(['ABC', 'ABC'].map(replace('A', 'C'))).toStrictEqual(['CBC', 'CBC']);
    expect(['ABCABC'].map(replace('A', 'C'))).toStrictEqual(['CBCABC']);
    expect(['ABCABC'].map(replace(/A/g, 'C'))).toStrictEqual(['CBCCBC']);
    expect(replace('A', 'C')('ABC')).toStrictEqual('CBC');
    expect(replace(/A/g, 'C')('ABCABC')).toStrictEqual('CBCCBC');
  });
});
