import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const nth = <T>(nth: number) => ɵsingleOperationReducer<T>((array) => array.at(nth));
