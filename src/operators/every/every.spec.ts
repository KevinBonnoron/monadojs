import { isTrue } from '../../utils';
import { every } from './every';

describe('every', () => {
  it('should return if every operator return true', () => {
    expect(every(isTrue)(true)).toBeTruthy();
    expect(every(isTrue)([true, true])).toBeTruthy();
    expect(every(isTrue)(false)).toBeFalsy();
    expect(every(isTrue)([true, false])).toBeFalsy();
  });
});
