import { Reducer } from '../../types';

export const min =
  <T = string | number>(): Reducer<T> =>
  (previousValue: T, currentValue: T) =>
    previousValue < currentValue ? previousValue : currentValue;
