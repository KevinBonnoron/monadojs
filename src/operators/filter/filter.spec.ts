import { filter } from './filter';

const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;

describe('filter', () => {
  it('should filter array', () => {
    const input = [0, 1, 2, 3];
    expect(filter(keepGreaterThan(1))(input)).toStrictEqual([2, 3]);
  });

  it('should filter object', () => {
    const input = { a: 0, b: 1, c: 2, d: 3 };
    expect(filter(() => true)(input)).toStrictEqual([input]);
  });
});
