import { Filter } from '../../types';

export const not =
  <S>(operator: Filter<S>) =>
  (source: S) =>
    !operator(source);
