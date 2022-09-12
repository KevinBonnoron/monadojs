import { Operator } from '../../types';

export const tap =
  <T>(fn: Operator<T, void>) =>
  (values: T): T => {
    fn(values);
    return values;
  };
