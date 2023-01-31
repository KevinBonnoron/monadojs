import { ɵsingleOperationReducer } from '../../utils';

export const flatten =
  (depth: number = 1) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.flat(depth));
