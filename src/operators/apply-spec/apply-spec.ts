import { Mapper } from '../../types';
import { isArray, isUndefined } from '../../utils';
import { entries } from '../entries/entries';

type Specs<T, V = any> = Record<keyof T, (...args: any[]) => Mapper<any, V>>;

const applySpecImpl = <T, V>(specs: Specs<T>, accumulator: T, value: V) => {
  for (const [key, mapper] of entries<Specs<T>>()(specs)) {
    if (isUndefined(accumulator[key])) {
      accumulator[key] = value as any;
    } else {
      accumulator[key] = mapper(accumulator[key])(value) as any;
    }
  }

  return accumulator;
};

export const applySpec =
  <S>(specs: Specs<S>) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.reduce((accumulator, value) => applySpecImpl(specs, accumulator, value), {} as S) : applySpecImpl(specs, {} as S, values);
