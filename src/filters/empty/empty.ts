import { Filter } from '../../types';
import { isEmpty } from '../../utils';

export const empty = <T>(): Filter<T> => isEmpty;
