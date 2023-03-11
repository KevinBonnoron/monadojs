import { entries } from '../../operators/entries/entries';
import { Mapper } from '../../types';
import { isFunction } from '../../utils';

type Transformation<S, O> = { [key: PropertyKey]: Mapper<S, O> | Transformation<any, any> };

export const transform =
  <S extends object, O>(transformations: Transformation<S[keyof S], O>) =>
  (source: S) =>
    entries<S>()(source).reduce(
      (object, [key, value]) => {
        if (transformations[key]) {
          const transformation = transformations[key];
          if (isFunction(transformation)) {
            object[key] = transformation(value) as any;
          } else {
            object[key] = transform<any, any>(transformation)(object[key]);
          }
        }

        return object;
      },
      { ...source }
    );
