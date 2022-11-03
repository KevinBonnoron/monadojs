import { isArray } from '../../utils';

const pickImpl = <T extends object>(object: T, properties: (keyof T)[]) => properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as Partial<T>);

export const pick =
  <T extends object>(...properties: (keyof T)[]) =>
  (values: T) =>
    isArray<T>(values) ? values.map((value) => pickImpl(value, properties)) : pickImpl(values, properties);
