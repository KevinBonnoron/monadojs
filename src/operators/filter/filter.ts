import { Operator } from '../../types';

export const filter =
  <T>(predicate: Operator<unknown, boolean>): Operator =>
  (values: T[]) =>
    values.filter(predicate);
