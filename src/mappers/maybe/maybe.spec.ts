import { Just, Nothing } from '../../utils';
import { maybe } from './maybe';

describe('maybe', () => {
  it('should convert value to maybe', () => {
    expect(maybe()(1)).toStrictEqual(Just(1));
    expect(maybe()(null)).toStrictEqual(Nothing);
  });
});
