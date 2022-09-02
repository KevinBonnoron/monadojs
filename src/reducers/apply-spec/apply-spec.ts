import { entries } from '../../mappers';
import { Mapper, Reducer } from '../../types';

type Specs<T> = Record<keyof T, (...args: any[]) => Mapper<number>>;

const applySpecImpl = <T>(specs: Specs<T>, accumulator: T, value: number) => {
  for (const [key, mapper] of entries<Specs<T>>()(specs)) {
    accumulator[key] = mapper(accumulator[key])(value);
  }

  return accumulator;
};

export const applySpec =
  <T>(specs: Specs<T>): Reducer<any> =>
  (previousValue, currentValue, currentIndex) => {
    let accumulator: any = previousValue;
    if (currentIndex === 1) {
      accumulator = Object.keys(specs).reduce((object, key) => ({ ...object, [key]: previousValue }), {});
    }

    return applySpecImpl(specs, accumulator, currentValue);
  };
