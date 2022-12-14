import { prop } from './prop';

describe('prop', () => {
  it('should return object property', () => {
    const value = { name: 'value' };
    const expected = 'value';

    expect(prop('name')(value)).toStrictEqual(expected);
    expect([value].map(prop('name'))).toStrictEqual([expected]);
  });
});
