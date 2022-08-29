import { avg } from './avg';

describe('avg', () => {
  it('should compute avg', () => {
    expect([4, 4, 5, 6, 6].reduce(avg())).toEqual(5);
  });
});
