import { Reducer } from '../../types';
import { nth } from '../nth/nth';

export const first = (): Reducer => nth(0);
