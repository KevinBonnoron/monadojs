import { singleOperationReducer } from '../../utils';

export const slice =
  (start: number = 0, length?: number) =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(start, length ? start + length : array.length));
