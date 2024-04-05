import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const join = <T extends string | number>(separator = ','): Reducer => ɵsingleOperationReducer<T, string>((array: T[]) => array.join(separator));
