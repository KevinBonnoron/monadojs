import { eq } from '../../filters';
import { iif } from './iff';

describe('iif', () => {
  it('should apply operator if condition is met', () => {
    const isTrue = eq(true);
    const isFalse = eq(false);
    const mapTo = (value: string) => () => value;
    const mapInvert = (value: boolean) => !value;

    expect(iif(isTrue, mapTo('a'), mapTo('b'))(true)).toEqual('a');
    expect(iif(isTrue, mapInvert)(true)).toEqual(false);
    expect(iif(isFalse, mapTo('a'), mapTo('b'))(true)).toEqual('b');
  });
});
