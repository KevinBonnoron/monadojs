import { avg } from './avg';

describe('avg', () => {
  it('should compute avg', () => {
    const source = [4, 4, 5, 6, 6];
    const operator = avg();
    const expected = 5;

    expect(source.reduce(operator)).toEqual(expected);
  });
});
