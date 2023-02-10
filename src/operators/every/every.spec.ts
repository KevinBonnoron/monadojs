import { isTrue } from '../../utils';
import { every } from './every';

describe('every', () => {
  it('should return if every elements matches filter', () => {
    expect(every(isTrue)(true)).toBeTruthy();
    expect(every(isTrue)([true, true])).toBeTruthy();
    expect(every(isTrue)(false)).toBeFalsy();
    expect(every(isTrue)([true, false])).toBeFalsy();
  });

  it('should return if every elements matches value', () => {
    expect(every(true)(true)).toBeTruthy();
    expect(every(true)([true, true])).toBeTruthy();
    expect(every(true)(false)).toBeFalsy();
    expect(every(true)([true, false])).toBeFalsy();
  });
});
