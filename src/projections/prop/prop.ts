import { isArray } from '../../utils';

// TODO change return type to something like T[keyof T] | T[keyof T][]
export const prop =
  <T>(property: keyof T) =>
  (values: T | T[]): any =>
    isArray(values) ? values.map(prop(property)) : values[property];
