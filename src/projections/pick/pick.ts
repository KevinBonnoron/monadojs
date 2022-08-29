import { isArray } from '../../utils';

export const pick =
  <T extends object>(...properties: string[]) =>
  (values: T | T[]): any =>
    isArray(values)
      ? values.map(pick(...properties))
      : Object.keys(values).reduce((object, key) => {
          if (properties.includes(key)) {
            object[key] = (values as any)[key];
          }

          return object;
        }, {} as any);
