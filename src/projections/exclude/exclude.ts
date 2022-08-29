import { isArray } from '../../utils';

export const exclude =
  <T extends object>(...properties: string[]) =>
  (values: T | T[]): any =>
    isArray(values)
      ? values.map(exclude(...properties))
      : Object.keys(values).reduce((object, key) => {
          if (!properties.includes(key)) {
            object[key] = (values as any)[key];
          }

          return object;
        }, {} as any);
