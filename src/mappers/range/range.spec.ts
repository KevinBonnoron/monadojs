import { range } from './range';

describe('range', () => {
  it('should compute range of value', () => {
    expect(range(0, 10, 0, 100)(5)).toStrictEqual(50);
  });
});
