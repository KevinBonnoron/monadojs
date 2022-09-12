import { isArray, isObject } from '../../utils';

export const pick =
  <T, P extends keyof T>(...properties: P[]) =>
  (values: T | T[]): T[P][] =>
    isArray(values)
      ? values.map(pick(...properties))
      : isObject<T>(values)
      ? Object.keys(values).reduce((object: any, key) => {
          if (properties.includes(key as P)) {
            object[key] = values[key as P];
          }
          return object;
        }, {} as T)
      : [];
