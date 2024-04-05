import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const sample = <T>(): Reducer<T> => ɵsingleOperationReducer((array: T[]) => array[Math.floor(Math.random() * array.length)]);
