import { ɵsingleOperationReducer } from '../../utils';

export const sample = <T>() => ɵsingleOperationReducer<T>((array) => array[Math.floor(Math.random() * array.length)]);
