import { isObject } from '../is-object/is-object';

export const propIn = <T, K extends PropertyKey = keyof T>(value: unknown, ...properties: K[]): value is T & Record<K, unknown> => isObject(value) && properties.every((property) => property in value)
;
