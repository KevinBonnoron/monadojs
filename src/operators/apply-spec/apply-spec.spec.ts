import { plus, times } from '../../mappers';
import { applySpec } from './apply-spec';

describe('spec', () => {
  it('should apply spec to object', () => {
    expect(applySpec({ sum: plus, multiply: times })([1, 2, 3, 4])).toStrictEqual({ sum: 10, multiply: 24 });
  });
});
