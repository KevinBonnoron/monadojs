import { singleOperationReducer } from '../../utils';

export const first =
  () =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(0)[0]);
