import { ɵsingleOperationReducer } from '../../utils';

export const join = <T>(separator = ',') => ɵsingleOperationReducer<T>((array) => array.join(separator));
