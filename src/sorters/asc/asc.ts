import { identity } from '../../operators';
import { Operator, Sorter } from '../../types';
import { compare, sorter } from '../../utils';

export const asc = <T, S>(prop: Operator<T, S> = identity() as Operator<T, S>): Sorter<T> => sorter((a: T, b: T) => compare(prop(a), prop(b)));
