import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { clone } from './clone';

describe('clone', () => {
  const operator = clone();

  it('should clone array', () => {
    const source = [0, { a: 1 }, 2, [3]];
    const cloned = operator(source);
    cloned.push(4);
    (cloned[1] as any).a = 2;

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual([0, { a: 2 }, 2, [3], 4]);
    expect(source).toStrictEqual([0, { a: 1 }, 2, [3]]);
  });

  it('should clone object', () => {
    const source: any = { a: { b: 1, c: { d: [2] } } };
    const cloned = operator(source);
    cloned.a.c.d.push(5);
    cloned.a.b = 2;

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual({ a: { b: 2, c: { d: [2, 5] } } });
    expect(source).toStrictEqual({ a: { b: 1, c: { d: [2] } } });
  });

  it('should clone Date', () => {
    const source = new Date('2020-01-01');
    const cloned = operator(source);
    cloned.setMonth(5);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(new Date('2020-06-01'));
    expect(source).toStrictEqual(new Date('2020-01-01'));
  });

  it('should clone Map', () => {
    const source = DEFAULT_MAP;
    const cloned = operator(source);
    cloned.set(3, 'a');
    cloned.set(0, 'd');

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(
      new Map([
        [0, 'd'],
        [1, 'b'],
        [2, 'c'],
        [3, 'a'],
      ])
    );
    expect(source).toStrictEqual(
      new Map([
        [0, 'a'],
        [1, 'b'],
        [2, 'c'],
      ])
    );
  });

  it('should clone Set', () => {
    const source = DEFAULT_SET;
    const cloned = operator(source);
    cloned.add(4);
    cloned.delete(1);

    expect(cloned).not.toBe(source);
    expect(cloned).toStrictEqual(new Set([2, 3, 4]));
    expect(source).toStrictEqual(new Set([1, 2, 3]));
  });
});
