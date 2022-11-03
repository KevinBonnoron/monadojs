import { Filter } from '../../types';

export const not =
  <T>(operator: Filter<T>) =>
  (value: T) =>
    !operator(value);
