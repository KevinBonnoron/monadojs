import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const sample = <T>() => ɵsingleOperationReducer<T>((array) => array[Math.floor(Math.random() * array.length)]);
