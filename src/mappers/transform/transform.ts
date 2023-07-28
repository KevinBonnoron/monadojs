import { entries } from '../../operators/entries/entries';
import { Mapper } from '../../types';
import { isFunction } from '../../utils';

type Transformation<S, O> = {
  [K in keyof S]: Mapper<S, O> | Transformation<S[K], O>
};

export const transform = <K extends keyof I, V, I extends Record<K, V>>(transformations: Transformation<K, unknown>) => <S extends I>(source: S) => [...entries()(source)].reduce(
  (object, [key, value]) => {
    if (transformations[key as keyof Transformation<K, unknown>]) {
      const transformation = transformations[key as keyof Transformation<K, unknown>];
      if (isFunction(transformation)) {
        object[key] = transformation(value as S[K]) as S[K];
      } else {
        object[key] = transform<any, V, S[K]>(transformation)(object[key]);
      }
    }

    return object;
  },
  { ...source }
);
