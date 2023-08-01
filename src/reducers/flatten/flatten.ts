import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const flatten = <T>(depth = 1) => ɵsingleOperationReducer<T>((array) => array.flat(depth));
