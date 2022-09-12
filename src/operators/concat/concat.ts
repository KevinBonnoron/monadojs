import { isArray } from '../../utils';

export const concat =
  <T>(...sources: T[]) =>
  (values: T | T[]) =>
    isArray(values) ? values.concat(...sources) : [values].concat(...sources);
