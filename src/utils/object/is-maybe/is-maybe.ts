import type { Maybe } from '../../../types';
import { propIn } from '../prop-in/prop-in';

export function isMaybe(value: unknown): value is Maybe {
  return propIn<Maybe>(value, 'pipe', 'isJust', 'isNothing', 'equals');
}
