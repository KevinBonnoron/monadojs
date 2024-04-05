import { Reducer } from '../../types';
import { nth } from '../nth/nth';

export const last = (): Reducer => nth(-1);
