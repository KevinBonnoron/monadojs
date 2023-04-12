import { isNil } from '../is-nil/is-nil';
import { isObject } from '../is-object/is-object';

export const propIn = <T = any>(value: unknown, ...properties: (keyof T)[]): value is T =>
  !isNil(value) && isObject(value) && properties.every((property) => property in value);
