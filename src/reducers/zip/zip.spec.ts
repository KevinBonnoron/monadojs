import { reduce } from '../../operators';
import { zip } from './zip';

describe('zip', () => {
  it('should zip values', () => {
    const source: any = [
      ['a', 'b'],
      ['d', 'e'],
      ['f', 'g'],
    ];
    const operator = zip();
    const expected = [
      ['a', 'd', 'f'],
      ['b', 'e', 'g'],
    ];

    expect(reduce(operator)(source)).toStrictEqual(expected);
    expect(source.reduce(operator)).toStrictEqual(expected);
  });

  it('should zip values', () => {
    const source: any = [
      ['a', 'd', 'f'],
      ['b', 'e', 'g'],
    ];
    const operator = zip();
    const expected = [
      ['a', 'b'],
      ['d', 'e'],
      ['f', 'g'],
    ];

    expect(reduce(operator)(source)).toStrictEqual(expected);
    expect(source.reduce(operator)).toStrictEqual(expected);
  });
});
