import { ɵsingleOperationReducer } from '../../utils';

export const flatten = <T>(depth = 1) => ɵsingleOperationReducer<T>((array) => array.flat(depth));
