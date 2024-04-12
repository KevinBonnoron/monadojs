import type { CollectionTypes } from './collection.type';
import type { MaybeConstructor } from './maybe.type';

export type Primitive = string | number | boolean | symbol;
export type PrimitiveTypes = StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor;
export type ObjectTypes = ObjectConstructor | FunctionConstructor | ArrayConstructor | DateConstructor | RegExpConstructor | PromiseConstructor | MaybeConstructor;
export type nil = null | undefined;

export type AllTypes = PrimitiveTypes | ObjectTypes | CollectionTypes | null | undefined;

export const nil: nil = Symbol() as unknown as nil;
