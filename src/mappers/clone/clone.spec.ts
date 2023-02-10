import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
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
    const source: any = { a: { b: 1, c: { d: 2 } } };
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.d = 5;
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
    const source = DEFAULT_MAP;
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.set(3, 'a');
    expect(cloned).not.toStrictEqual(source);
  });

  it('should clone Set', () => {
    const source = DEFAULT_SET;
    const cloned = operator(source);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(source);

    source.add(4);
    expect(cloned).not.toStrictEqual(source);
  });
});
