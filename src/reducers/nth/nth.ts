import { Reducer } from '../../types';
import { ɵsingleOperationReducer } from '../../utils/reducer/reducer.utils';

export const nth = <T>(nth: number): Reducer => ɵsingleOperationReducer((array: T[]) => array.at(nth));
