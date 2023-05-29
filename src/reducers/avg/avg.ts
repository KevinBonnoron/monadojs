import { round } from '../../mappers';
import { ɵsingleOperationReducer } from '../../utils';
import { sum } from '../sum/sum';

export const avg =
  () => <T extends number>(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => ɵsingleOperationReducer(previousValue, currentValue, currentIndex, array, () => round()(array.reduce(sum(), 0 as T) / array.length));
