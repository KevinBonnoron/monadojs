import type { PrimitiveTypes } from '../../../types';
import { isBoolean } from '../is-boolean/is-boolean';
import { isPropertyKey } from '../is-propertykey/is-propertykey';

export function isPrimitive(value: unknown): value is PrimitiveTypes {
  return isPropertyKey(value) || isBoolean(value);
}
