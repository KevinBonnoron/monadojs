import { isPlainObject } from '../is-plain-object/is-plain-object';
import { propIn } from '../prop-in/prop-in';

export function haveSameSymbols(o1: unknown, o2: unknown): boolean {
  return isPlainObject(o1) && isPlainObject(o2) && propIn(o2, ...Object.getOwnPropertySymbols(o1)) && propIn(o1, ...Object.getOwnPropertySymbols(o2));
}
