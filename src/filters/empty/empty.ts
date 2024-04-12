import type { Operator } from '../../types';
import { isEmpty } from '../../utils/object/is-empty/is-empty';

export function empty(): Operator<unknown, boolean> {
  return isEmpty;
}
