import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const flatten = <T>(depth = 1): Reducer => ɵsingleOperationReducer((array: T[]) => array.flat(depth));
