import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const slice = (start = 0, length?: number): Reducer => ɵsingleOperationReducer((array) => array.slice(start, length ? start + length : array.length));
