import { compare } from './sort.utils';

describe('SortUtils', () => {
  it('should compare 2 values without options', () => {
    const operator = compare();

    expect(operator('a', 'b')).toEqual(-1);
    expect(operator(0, 1)).toEqual(-1);
    expect(operator(0, null)).toEqual(0);
  });

  it('should compare 2 values with nullsAs first', () => {
    const operator = compare({ nullsAs: 'first' });

    expect(operator('a', 'b')).toEqual(-1);
    expect(operator(0, 1)).toEqual(-1);
    expect(operator(0, null)).toEqual(1);
  });

  it('should compare 2 values with nullsAs last', () => {
    const operator = compare({ nullsAs: 'last' });

    expect(operator('a', 'b')).toEqual(-1);
    expect(operator(0, 1)).toEqual(-1);
    expect(operator(0, null)).toEqual(-1);
  });
});
