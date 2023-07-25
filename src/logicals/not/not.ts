import { Filter } from '../../types';

export const not = (operator: Filter) => <S>(source: S) => !operator(source);
