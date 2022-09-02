import { sub } from './sub';

describe('sub', () => {
  it('should sub values', () => {
    expect(sub()(1)).toStrictEqual(0);
  });
});
