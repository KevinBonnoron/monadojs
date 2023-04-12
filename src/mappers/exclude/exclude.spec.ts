import { person } from '../../../tests/test.data';
import { exclude } from './exclude';

describe('exclude', () => {
  describe('PlainObject', () => {
    const source = { a: 1, b: 2, c: 3 };

    it('should pick one property', () => {
      const operator = exclude('a');
      const expected = { b: 2, c: 3 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });

    it('should pick two properties', () => {
      const operator = exclude('a', 'b');
      const expected = { c: 3 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });
  });

  it('should compile', () => {
    const personWithoutId: { name: string; birthDate: Date } = exclude('id')(person);
    const personWithoutName: { id: number; birthDate: Date } = exclude('name')(person);
    const personWithoutBirthDate: { id: number; name: string } = exclude('birthDate')(person);
    const personWithoutIdAndName: { birthDate: Date } = exclude('id', 'name')(person);
    const personWithoutIdAndNameAndBirthDate: {} = exclude('id', 'name', 'birthDate')(person);

    // @ts-expect-error
    exclude('id')({ noId: 0 });
    // @ts-expect-error
    exclude('Id')(person);
  });
});
