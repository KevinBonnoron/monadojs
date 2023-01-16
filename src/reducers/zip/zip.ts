import { arrayAccumulator } from '../../utils';

const split = <T>(accumulator: T[][], value: T[]) => {
  for (let i = 0; i < value.length; i++) {
    if (accumulator[i] === undefined) {
      accumulator[i] = [];
    }

    accumulator[i].push(value[i]);
  }

  return accumulator;
};

export const zip =
  () =>
  <T>(previousValue: T[], currentValue: T[], currentIndex: number) =>
    arrayAccumulator<T[]>(previousValue, currentValue, currentIndex, split);
