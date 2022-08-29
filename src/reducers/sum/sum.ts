import { Reducer } from '../../types';

export const sum =
  <T extends number>(): Reducer<T> =>
  (previousValue: T, currentValue: T) =>
    previousValue + currentValue;
