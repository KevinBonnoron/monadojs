import { unique } from './unique';

describe('unique', () => {
  it('should return unique array values', () => {
    expect(['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b'].reduce(unique())).toStrictEqual(['b', 0, false, 1, 2, 'a', true, 3, 4]);
  });
});
