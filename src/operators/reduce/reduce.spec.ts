import { reduce } from './reduce';

describe('reduce', () => {
  it('reduce values', () => {
    const minReducer = (a: number, b: number) => (a > b ? b : a);
    expect(reduce(minReducer)([0, 1, 2])).toEqual(0);
    expect(reduce(minReducer, -1)([0, 1, 2])).toEqual(-1);
    expect(reduce(minReducer)(0)).toEqual(0);
    expect(reduce(minReducer, -1)(0)).toEqual(-1);
  });
});
