import { lower } from './lower';

describe('lower', () => {
  it('should return lowercase string', () => {
    expect(['abc'].map(lower())).toStrictEqual(['abc']);
    expect(['abc', 'DEF'].map(lower())).toStrictEqual(['abc', 'def']);
    expect(lower()('abc')).toStrictEqual('abc');
    expect(lower()(['abc', 'DEF'])).toStrictEqual(['abc', 'def']);
    expect(lower()(['abc', 'DEF'])).toStrictEqual(['abc', 'def']);
    expect(lower()({ a: 'abc', b: 'DEF' })).toStrictEqual({ a: 'abc', b: 'def' });
  });
});
