import { join } from './join';

describe('join', () => {
  it('should join array elements', () => {
    expect([0, 1, 2].reduce(join())).toBe('0,1,2');
  });
});
