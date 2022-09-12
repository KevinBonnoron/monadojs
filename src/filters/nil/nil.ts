import { Filter } from '../../types';
import { isNil } from '../../utils';

export const nil = <T>(): Filter<T> => isNil;
