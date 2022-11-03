import { Mapper } from '../../types';
import { isUndefined } from '../../utils';
import { entries } from '../entries/entries';

type Specs<T> = Record<keyof T, (...args: any[]) => Mapper<any, number[]>>;

const applySpecImpl = <T>(specs: Specs<T>, accumulator: T, value: number) => {
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
  <T>(specs: Specs<T>) =>
  (values: number[]) => {
    const accumulator = {} as T;
    return values.reduce((accumulator, value) => applySpecImpl(specs, accumulator, value), accumulator);
  };
