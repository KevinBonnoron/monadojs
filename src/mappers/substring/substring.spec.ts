import { substring } from './substring';

describe('substring', () => {
  it('should return substring of values', () => {
    expect(['ABC'].map(substring(1))).toStrictEqual(['BC']);
    expect([['ABC'], ['DEF']].map(substring(1))).toStrictEqual([['BC'], ['EF']]);
    expect(['ABC'].map(substring(1, 1))).toStrictEqual(['B']);
    expect(['ABC'].map(substring(-1))).toStrictEqual(['ABC']);
    expect(substring(1)('ABC')).toStrictEqual('BC');
    expect(substring(1)(['ABC', 'DEF'])).toStrictEqual(['BC', 'EF']);
    expect(substring(1, 1)('ABC')).toStrictEqual('B');
    expect(substring(-1)('ABC')).toStrictEqual('ABC');
  });
});
