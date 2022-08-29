import { Operator } from '../../types';

export const some =
  <T>(predicate: Operator<unknown, boolean>): Operator =>
  (values: T[]) =>
    values.some(predicate);
