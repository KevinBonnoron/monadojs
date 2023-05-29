import { ɵsingleOperationReducer } from '../../utils';

export const join =
  (separator = ',') => <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.join(separator));
