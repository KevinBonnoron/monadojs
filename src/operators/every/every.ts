import { Operator } from '../../types';

export const every =
  <T>(predicate: Operator<unknown, boolean>) =>
  (values: T[]) =>
    values.every(predicate);
