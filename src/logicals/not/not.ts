import { Filter } from '../../types';

export const not =
  (operator: Filter) =>
  <S>(source: S): boolean =>
    !operator(source);
