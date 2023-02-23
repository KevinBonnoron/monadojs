import { MaybeConstructor } from './maybe.type';

export type Types = 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function' | 'array' | 'date' | 'map' | 'regexp';
export type Primitive = StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor;
export type ObjectTypes = ObjectConstructor | FunctionConstructor | ArrayConstructor | DateConstructor | RegExpConstructor | MaybeConstructor;
export type nil = null | undefined;
export type Collection<V = unknown, K = unknown> = Map<K, V> | Set<V>;
export type CollectionTypes = MapConstructor | SetConstructor;

export type AllTypes = Primitive | ObjectTypes | CollectionTypes | nil;

export type UnwrapValue<T> = T extends Array<infer V> ? V : T extends Set<infer V> ? V : T extends Map<unknown, infer V> ? V : never;
