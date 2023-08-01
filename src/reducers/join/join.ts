import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const join = <T>(separator = ',') => ɵsingleOperationReducer<T>((array) => array.join(separator));
