import { Operator } from '../../types';

export const identity =
  <T>(): Operator<T, T> =>
  (value: T) =>
    value;
