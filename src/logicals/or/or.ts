import { Filter } from '../../types';

export const or =
  <S>(...operators: Filter<S>[]) =>
  (source: S) =>
    operators.reduce((previousValue, currentValue) => (previousValue ? previousValue : currentValue(source)), false);
