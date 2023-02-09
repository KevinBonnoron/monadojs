import { prop } from './prop';

describe('prop', () => {
  it('should return object property', () => {
    const source = { name: 'value' };
    const operator = prop('name');
    const expected = 'value';

    expect(operator(source)).toStrictEqual(expected);
    expect([source].map(operator)).toStrictEqual([expected]);
  });

  it('should return Map key', () => {
    const source = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const operator = prop('a');
    const expected = 1;

    expect(operator(source)).toStrictEqual(expected);
    expect([source].map(operator)).toStrictEqual([expected]);
  });
});
