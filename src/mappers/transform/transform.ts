import { entries } from '../../operators/entries/entries';
import { Mapper } from '../../types';
import { isFunction } from '../../utils';

type Transformation<S, O> = { [K in keyof S]: Mapper<S, O> | Transformation<S[K], O> };

export const transform =
  <S extends Record<keyof S, any>, O>(transformations: Transformation<S, O>) =>
  (source: S) =>
    [...entries()(source)].reduce(
      (object, [key, value]) => {
        if (transformations[key]) {
          const transformation = transformations[key];
          if (isFunction(transformation)) {
            object[key] = transformation(value as any) as any;
          } else {
            object[key] = transform<any, any>(transformation)(object[key]);
          }
        }

        return object;
      },
      { ...source }
    );
