import { pipe, reduce } from '../../operators';
import { min } from './min';

describe('min', () => {
  it('should return the min of number elements', () => {
    const values = [1, 3, 2];
    const expected = 1;
    expect(values.reduce(min())).toStrictEqual(expected);
    expect(pipe(reduce(min()))(values)).toStrictEqual(expected);
  });

  it('should return the min of string elements', () => {
    const values = ['a', 'c', 'b'];
    const expected = 'a';
    expect(values.reduce(min())).toStrictEqual(expected);
    expect(pipe(reduce(min()))(values)).toStrictEqual(expected);
  });
});
