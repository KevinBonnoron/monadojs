import { PrimitiveTypes } from '../../../types';
import { isBoolean } from '../is-boolean/is-boolean';
import { isPropertyKey } from '../is-propertykey/is-propertykey';

export const isPrimitive = (value: unknown): value is PrimitiveTypes => isPropertyKey(value) || isBoolean(value);
