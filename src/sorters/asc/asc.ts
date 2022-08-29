import { identity } from '../../operators/identity/identity';
import { Sorter } from '../../types';
import { compare, sorter } from '../../utils';

export const asc = <T>(prop: (a: T) => any = identity<T>()): Sorter<T> => sorter((a: T, b: T) => compare(prop(a), prop(b)));
