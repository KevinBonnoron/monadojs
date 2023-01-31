import { ɵsingleOperationReducer } from '../../utils';

export const nth =
  (nth: number) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(nth)[0]);
