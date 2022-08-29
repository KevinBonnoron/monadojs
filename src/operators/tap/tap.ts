import { Operator } from '../../types';

export const tap =
  <T>(fn: (values: T) => void): Operator<T> =>
  (values: T) => {
    fn(values);
    return values;
  };
