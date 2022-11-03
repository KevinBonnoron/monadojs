import { prop } from '../../mappers';
import { unique } from './unique';

describe('unique', () => {
  it('should return unique array values', () => {
    expect(['b', 0, false, 1, 2, 1, 'a', true, 3, 0, 4, false, 'b'].filter(unique())).toStrictEqual(['b', 0, false, 1, 2, 'a', true, 3, 4]);
    expect(
      [
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 },
      ].filter(unique(prop('a')))
    ).toStrictEqual([
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ]);
  });
});
