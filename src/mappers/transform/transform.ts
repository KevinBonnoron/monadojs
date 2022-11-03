import { entries } from '../../operators/entries/entries';
import { Mapper } from '../../types';
import { isFunction } from '../../utils';

type Transformation<T, S> = { [key: PropertyKey]: Mapper<T, S> | Transformation<any, any> };

export const transform =
  <T extends object, S>(transformations: Transformation<T[keyof T], S>) =>
  (value: T) =>
    entries<T>()(value).reduce(
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
      { ...value }
    );
