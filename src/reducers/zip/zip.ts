import { ɵarrayAccumulator } from '../../utils';

type Matrix<T> = T[][];

const zipImpl = <T>(accumulator: Matrix<T>, value: T[]) => {
  for (let i = 0; i < value.length; i++) {
    if (accumulator[i] === undefined) {
      accumulator[i] = [];
    }

    accumulator[i].push(value[i]);
  }

  return accumulator;
};

export const zip =
  <T>() => (previousValue: T[], currentValue: T[], currentIndex: number) => ɵarrayAccumulator<T[]>(previousValue, currentValue, currentIndex, zipImpl);
