import { floor } from './floor';

describe('floor', () => {
  it('should floor values', () => {
    expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(floor())).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(floor()([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
