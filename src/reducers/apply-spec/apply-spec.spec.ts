import { add, times } from '../../mappers';
import { applySpec } from './apply-spec';

describe('spec', () => {
  it('should apply spec to object', () => {
    expect([1, 2, 3, 4].reduce(applySpec({ sum: add, multiply: times }))).toStrictEqual({ sum: 10, multiply: 24 });
  });
});
