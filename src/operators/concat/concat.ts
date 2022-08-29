import { Operator } from '../../types';
import { isArray } from '../../utils';

export const concat =
  <T>(...sources: T[]): Operator =>
  (values: T | T[]) =>
    isArray(values) ? values.concat(...sources) : [values].concat(...sources);
