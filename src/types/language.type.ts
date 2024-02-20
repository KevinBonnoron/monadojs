import { CollectionTypes } from './collection.type';
import { MaybeConstructor } from './maybe.type';

export type Types = 'string' | 'number' | 'boolean' | 'symbol' | 'object' | 'function' | 'array' | 'date' | 'map' | 'regexp';
export type Primitive = string | number | boolean | symbol;
export type PrimitiveTypes = StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor;
export type ObjectTypes = ObjectConstructor | FunctionConstructor | ArrayConstructor | DateConstructor | RegExpConstructor | PromiseConstructor | MaybeConstructor;
export type nil = null | undefined;

export type AllTypes = PrimitiveTypes | ObjectTypes | CollectionTypes | null | undefined;

// biome-ignore lint/style/noVar: <explanation>
export var nil: nil = Symbol() as unknown as nil;
