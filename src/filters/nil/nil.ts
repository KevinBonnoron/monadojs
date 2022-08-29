import { or } from '../../logicals/or/or';
import { Filter } from '../../types';
import { eq } from '../eq/eq';

export const nil = <T>(): Filter<T> => or(eq(null), eq(undefined));
