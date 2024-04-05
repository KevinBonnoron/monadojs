import { Reducer } from '../../types';
import { round } from '../../utils/number/number.utils';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';
import { sum } from '../sum/sum';

export const avg = (): Reducer => ɵsingleOperationReducer((array: number[]) => round(array.reduce(sum(), 0) / array.length));
