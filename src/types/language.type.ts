import { MaybeConstructor } from './maybe.type';

export type Types = 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function' | 'array' | 'date' | 'map' | 'regexp';
export type Primitive = string | number | boolean | symbol;
export type PrimitiveTypes = StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor;
export type ObjectTypes = ObjectConstructor | FunctionConstructor | ArrayConstructor | DateConstructor | RegExpConstructor | PromiseConstructor | MaybeConstructor;
export type nil = null | undefined;
export type Collection<V = unknown, K = unknown> = Map<K, V> | Set<V> | Array<V>;
export type CollectionTypes = MapConstructor | SetConstructor;

export type AllTypes = PrimitiveTypes | ObjectTypes | CollectionTypes | null | undefined;

// eslint-disable-next-line no-var
export var nil: nil = Symbol() as unknown as nil;
