import { eq } from '../../filters';
import { findIndex } from './find-index';

describe('find', () => {
  it('should find indexes', () => {
    expect(findIndex(eq(true))(true)).toBe(0);
    expect(findIndex(eq(true))(false)).toBe(-1);
    expect(findIndex(eq(true))([true, false] as any)).toBe(0);
  });
});
