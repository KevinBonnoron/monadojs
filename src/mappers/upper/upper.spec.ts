import { upper } from './upper';

describe('upper', () => {
  it('should return lowercase string', () => {
    expect(['abc'].map(upper())).toStrictEqual(['ABC']);
    expect(['abc', 'DEF'].map(upper())).toStrictEqual(['ABC', 'DEF']);
    expect(upper()('abc')).toStrictEqual('ABC');
  });
});
