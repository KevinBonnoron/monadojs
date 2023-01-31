import { ɵsingleOperationReducer } from '../../utils';

export const sample =
  () =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => array[Math.floor(Math.random() * array.length)]);
