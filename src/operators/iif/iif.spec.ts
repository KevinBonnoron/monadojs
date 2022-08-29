import { eq } from '../../filters';
import { iif } from './iff';

describe('iif', () => {
  it('should apply operator if condition is met', () => {
    const isTrue = eq(true);
    const isFalse = eq(false);
    const mapInvert = (value: boolean) => !value;

    expect(iif(isTrue, 'a', 'b')(true)).toEqual('a');
    expect(iif(isTrue, mapInvert)(true)).toEqual(false);
    expect(iif(isFalse, 'a', 'b')(true)).toEqual('b');
  });
});
