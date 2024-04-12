import type { Reducer } from '../../types';
import { nth } from '../nth/nth';

export function last(): Reducer {
  return nth(-1);
}
