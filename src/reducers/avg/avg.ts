import { round } from '../../mappers';
import { ɵsingleOperationReducer } from '../../utils';
import { sum } from '../sum/sum';

export const avg = () => ɵsingleOperationReducer<number>((array) => round()(array.reduce(sum(), 0) / array.length));
