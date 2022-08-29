import { identity } from '../../operators/identity/identity';
import { Sorter } from '../../types';
import { compare, sorter } from '../../utils';

export const desc = <T>(prop: (a: T) => any = identity<T>()): Sorter<T> => sorter((a: T, b: T) => compare(prop(b), prop(a)));
