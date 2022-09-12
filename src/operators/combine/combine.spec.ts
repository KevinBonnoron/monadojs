import { combine } from './combine';

describe('combine', () => {
  it('should combile operators', () => {
    const mapTo = (value: number) => () => value;

    expect(combine(mapTo(5), mapTo(10))(1)).toStrictEqual([5, 10]);
    expect(combine(mapTo(5), mapTo(10))([1, 2])).toStrictEqual([5, 10]);
    expect(combine(mapTo(5), mapTo(10))(null)).toStrictEqual([5, 10]);
  });
});
