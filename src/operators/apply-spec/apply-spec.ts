import { entries } from '../../mappers';
import { Mapper, Operator } from '../../types';
import { isUndefined } from '../../utils';

type Specs<T> = Record<keyof T, (...args: any[]) => Mapper<number>>;

const applySpecImpl = <T>(specs: Specs<T>, accumulator: T, value: number) => {
  for (const [key, mapper] of entries<Specs<T>>()(specs)) {
    if (isUndefined(accumulator[key])) {
      accumulator[key] = value as any;
    } else {
      accumulator[key] = mapper(accumulator[key])(value);
    }
  }

  return accumulator;
};

export const applySpec =
  <T extends number>(specs: Specs<T>): Operator =>
  (values: number[]) => {
    const accumulator = {} as T;
    return values.reduce((accumulator, value) => applySpecImpl(specs, accumulator, value), accumulator);
  };
