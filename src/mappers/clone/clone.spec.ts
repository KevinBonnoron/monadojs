import { clone } from './clone';

describe('clone', () => {
  it('should clone array', () => {
    const input = [0, 1, 2, [3]];
    const cloned = clone()(input);
    expect(cloned).not.toBe(input);
    expect(cloned).toStrictEqual(input);
  });

  it('should clone object', () => {
    const input = { a: { b: 1, c: { d: 2 } } };
    const cloned = clone()(input);
    expect(cloned).not.toBe(input);
    expect(cloned).toStrictEqual(input);

    input.a.b = 5;
    expect(cloned).not.toStrictEqual(input);
  });
});
