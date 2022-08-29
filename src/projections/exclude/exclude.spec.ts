import { exclude } from './exclude';

describe('exclude', () => {
  it('should exclude properties from object', () => {
    expect(exclude('a')({ a: 1, b: 2, c: 3 })).toStrictEqual({ b: 2, c: 3 });
  });
});
