import { ɵsingleOperationReducer } from '../../utils';

export const slice = (start = 0, length?: number) => ɵsingleOperationReducer((array) => array.slice(start, length ? start + length : array.length));
