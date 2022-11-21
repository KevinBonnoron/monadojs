import { pipe, reduce } from '../../operators';
import { max } from './max';

describe('max', () => {
  it('should return the max of number elements', () => {
    const values = [1, 3, 2];
    const expected = 3;
    expect(values.reduce(max())).toStrictEqual(expected);
    expect(pipe(reduce(max()))(values)).toStrictEqual(expected);
  });

  it('should return the max of string elements', () => {
    const values = ['a', 'c', 'b'];
    const expected = 'c';
    expect(values.reduce(max())).toStrictEqual(expected);
    expect(pipe(reduce(max()))(values)).toStrictEqual(expected);
  });
});
