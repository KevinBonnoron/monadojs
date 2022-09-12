import { Mapper } from '../../types';
import { isArray, isFunction, isObject } from '../../utils';
import { entries } from '../entries/entries';

type Transformation<T> = { [key: PropertyKey]: Mapper<T> | Transformation<any> };

export const transform =
  <T extends object>(transformations: Transformation<T[keyof T]>): Mapper<T> =>
  (values: T | T[]) =>
    isArray(values)
      ? values.map(transform(transformations))
      : isObject(values)
      ? entries<T>()(values).reduce(
          (object, [key, value]) => {
            if (transformations[key]) {
              const transformation = transformations[key];
              if (isFunction(transformation)) {
                object[key] = transformation(value);
              } else {
                object[key] = transform<any>(transformation)(object[key]);
              }
            }

            return object;
          },
          { ...values }
        )
      : null;
