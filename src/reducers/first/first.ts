import type { Reducer } from '../../types';
import { nth } from '../nth/nth';

export function first(): Reducer {
  return nth(0);
}
