import { Maybe } from './maybe.type';

export type Types = 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function' | 'array' | 'date' | 'map' | 'regexp';
export type Primitive = string | number | boolean | symbol;
export type ObjectTypes = object | Function | Array<unknown> | Date | Map<unknown, unknown> | RegExp | Maybe;
export type AllTypes = Primitive | ObjectTypes | null | undefined;
export type Collection<T = unknown> = Map<unknown, T> | Set<T>;
