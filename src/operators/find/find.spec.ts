import { eq } from '../../filters';
import { find } from './find';

describe('find', () => {
  it('should find values', () => {
    expect(find(eq(true))(true)).toBeTruthy();
    expect(find(eq(true))(false)).toBeFalsy();
    expect(find(eq(true))([true, false])).toBeTruthy();
  });
});
