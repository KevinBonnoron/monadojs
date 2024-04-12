import type { AllTypes } from '../../types';
import { isType } from '../../utils/object/is-type/is-type';

export function is<T extends AllTypes>(type: T): (value: unknown) => value is T {
  return isType<T>(type);
}
