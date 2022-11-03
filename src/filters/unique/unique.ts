import { identity } from '../../operators';
import { Filter, Operator } from '../../types';

export const unique =
  <T, S>(operator: Operator<T, S> = identity() as Operator<T, any>): Filter<T> =>
  (value: T, index?: number, array?: T[]) =>
    array?.indexOf(operator(value) as any) === index;
