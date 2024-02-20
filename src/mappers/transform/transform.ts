import { entries } from '../../operators/entries/entries';
import { Mapper } from '../../types';
import { isFunction } from '../../utils';

type Transformation<T, O = unknown> = {
  [K in keyof T]: Transformation<T[K], O> | Mapper<T, O>;
};

const isMapper = (value: unknown): value is Mapper => isFunction(value);

const transformImpl = <T>(source: T, transformations: Transformation<T>) => {
  return [...entries()(source)].reduce((object, [key, value]) => {
    const transformation = transformations[key as keyof typeof transformations];
    if (isMapper(transformation)) {
      object[key] = transformation(value);
    } else {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      object[key] = transformImpl(source[key], transformation as any);
    }

    return object;
  }, {} as T);
};

export const transform =
  <I extends Record<PropertyKey, unknown>>(transformations: Transformation<I>) =>
  <S extends I>(source: S) =>
    transformImpl(source, transformations);
