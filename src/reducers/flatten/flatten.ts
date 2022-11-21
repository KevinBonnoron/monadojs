import { singleOperationReducer } from '../../utils';

export const flatten =
  (depth: number = 1) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.flat(depth));
