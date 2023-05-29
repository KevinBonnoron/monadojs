import { ɵsingleOperationReducer } from '../../utils';

export const slice =
  (start = 0, length?: number) => <T>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => array.slice(start, length ? start + length : array.length));
