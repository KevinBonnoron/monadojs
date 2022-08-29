import { Operator } from '../../types';

export const shuffle =
  <T>(): Operator<T[]> =>
  (values: T[]) =>
    values
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
