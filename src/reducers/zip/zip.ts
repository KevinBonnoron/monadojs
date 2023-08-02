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

export const zip = <T>() => ɵarrayAccumulator<T[]>(zipImpl);
