import { singleOperationReducer } from '../../utils';

export const join =
  (separator: string = ',') =>
  <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) =>
    singleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.join(separator));
