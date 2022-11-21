import { singleOperationReducer } from '../../utils';

export const last =
  () =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(-1)[0]);
