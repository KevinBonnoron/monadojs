import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { iin } from './iin';

describe('iin', () => {
  it('should return if value is in array', () => {
    const operator = iin([1, 2, 3]);

    expect(operator(1)).toBeTruthy();
    expect(operator(0)).toBeFalsy();
  });

  it('should return if value is in map', () => {
    const operator = iin(DEFAULT_MAP);

    expect(operator('a')).toBeTruthy();
    expect(operator('d')).toBeFalsy();
  });

  it('should return if value is in set', () => {
    const operator = iin(DEFAULT_SET);

    expect(operator(1)).toBeTruthy();
    expect(operator(0)).toBeFalsy();
  });
});
