import { Filters } from '../../types';

export const or = (...operators: Filters) => <S>(source: S) => operators.reduce((previousValue, currentValue) => (previousValue ? previousValue : currentValue(source)), false);
