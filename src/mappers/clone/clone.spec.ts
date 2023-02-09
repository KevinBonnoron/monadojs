import { clone } from './clone';

describe('clone', () => {
  const operator = clone();

  it('should clone array', () => {
    const source = [0, 1, 2, [3]];
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);
  });

  it('should clone object', () => {
    const source = { a: { b: 1, c: { d: 2 } } };
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.a.b = 5;
    expect(cloned).not.toStrictEqual(source);
  });

  it('should clone Date', () => {
    const source = new Date('2020-01-01');
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.setMonth(5);
    expect(cloned).not.toStrictEqual(source);
  });

  it('should clone Map', () => {
    const source = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.set('a', 4);
    expect(cloned).not.toStrictEqual(source);
  });

  it('should clone Set', () => {
    const source = new Set(['a', 'b', 'c']);
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.add('d');
    expect(cloned).not.toStrictEqual(source);
  });
});
