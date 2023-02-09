import { Filter } from '../../types';

export const not =
  <T>(operator: Filter<T>) =>
  (source: T) =>
    !operator(source);
