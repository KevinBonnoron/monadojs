import { isArray } from '../../utils';
import { prop } from '../prop/prop';

// TODO change return type
export const props =
  <T>(...properties: (keyof T)[]) =>
  (values: T | T[]): any =>
    isArray(values) ? values.map(props(...properties)) : properties.map(prop).map((predicate) => predicate(values));
