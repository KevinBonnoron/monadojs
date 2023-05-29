import { isNil } from '../is-nil/is-nil';
import { isObject } from '../is-object/is-object';

export const propIn = <T extends object, K extends PropertyKey = keyof T>(value: unknown, ...properties: K[]): value is T => !isNil(value) && isObject(value) && properties.every((property) => property in value);
