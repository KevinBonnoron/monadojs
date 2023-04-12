import { DEFAULT_PLAIN_OBJECT, person } from '../../../tests/test.data';
import { pipe } from '../../operators/pipe/pipe';
import { prop } from './prop';

describe('prop', () => {
  describe('PlainObject', () => {
    const operator = prop('a', 4);

    it('should return property', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });

    it('should return defaultValue', () => {
      const source = { a: undefined, b: 2, c: 3 };
      const expected = 4;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });
  });

  it('should compile', () => {
    // id
    {
      // @ts-expect-error
      const error: null = prop('id')(person);
      // @ts-expect-error
      prop('id')({ noId: 0 });
      const _pipeMapProp: number = prop('id')(person);
      const _pipeMapPropName: number = pipe(prop('id'))(person);
    }

    // name
    {
      // @ts-expect-error
      const error: null = prop('name')(person);
      // @ts-expect-error
      prop('name')({ noName: 'noName' });
      const _pipeMapProp: string = prop('name')(person);
      const _pipeMapPropName: string = pipe(prop('name'))(person);
    }

    // birthDate
    {
      // @ts-expect-error
      const error: null = prop('birthDate')(person);
      // @ts-expect-error
      prop('birthDate')({ noName: 'noName' });
      const _pipeMapProp: Date = prop('birthDate')(person);
      const _pipeMapPropName: Date = pipe(prop('birthDate'))(person);
    }

    // @ts-expect-error
    prop('name')([]);
    // @ts-expect-error
    prop('name')(new Map());
    // @ts-expect-error
    prop('name')(new Set());
    // @ts-expect-error
    prop('name')(new Date());
  });
});
