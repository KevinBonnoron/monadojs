import { Operator } from '../../types';

export const every =
  <T>(predicate: Operator<unknown, boolean>): Operator<T[]> =>
  (values: T[]) =>
    values.every(predicate);
