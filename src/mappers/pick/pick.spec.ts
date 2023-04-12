import { person } from '../../../tests/test.data';
import { pick } from './pick';

describe('pick', () => {
  describe('PlainObject', () => {
    const source = { a: 1, b: 2, c: 3 };

    it('should pick one property', () => {
      const operator = pick('a');
      const expected = { a: 1 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });

    it('should pick two properties', () => {
      const operator = pick('a', 'b');
      const expected = { a: 1, b: 2 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });
  });

  it('should compile', () => {
    const personWithId: { id: number } = pick('id')(person);
    const personWithName: { name: string } = pick('name')(person);
    const personWithBirthDate: { birthDate: Date } = pick('birthDate')(person);
    const personWithIdAndName: { id: number; name: string } = pick('id', 'name')(person);
    const personWithIdAndNameAndBirthDate: { id: number; name: string; birthDate: Date } = pick('id', 'name', 'birthDate')(person);

    // @ts-expect-error
    pick('id')({ noId: 0 });
    // @ts-expect-error
    pick('Id')(person);
  });
});
