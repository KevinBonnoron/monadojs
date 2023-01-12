import { ceil } from './ceil';

describe('ceil', () => {
  it('should ceil values', () => {
    expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(ceil())).toStrictEqual([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect([-0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9].map(ceil())).toStrictEqual([-0, -0, -0, -0, -0, -0, -0, -0, -0, -0]);
    expect(ceil()(0.0)).toStrictEqual(0);
  });
});
