import { singleOperationReducer } from '../../utils';

export const nth =
  (nth: number) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(nth)[0]);
