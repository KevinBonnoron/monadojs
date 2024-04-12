import type { Maybe, MaybeConstructor } from '../../types';
import { toType } from '../../utils';

export function to(type: null): (value: unknown) => null;
export function to(type: undefined): (value: unknown) => undefined;
export function to(type: StringConstructor): (value: unknown) => string;
export function to(type: NumberConstructor): (value: unknown) => number;
export function to(type: BooleanConstructor): (value: unknown) => boolean;
export function to(type: SymbolConstructor): (value: unknown) => symbol;
export function to(type: DateConstructor): (value: unknown) => Date;
export function to(type: RegExpConstructor): (value: unknown) => RegExp;
export function to(type: ArrayConstructor): <V>(value: V) => V[];
export function to(type: SetConstructor): <V>(value: V) => Set<V>;
export function to<K, V>(type: MapConstructor, keyFn: (value: V, index: number) => K): <S extends V>(value: S) => Map<K, S>;
export function to(type: MaybeConstructor): <V>(value: V) => Maybe<V>;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function to(type: any, keyFn?: (value: unknown, index: number) => unknown): unknown {
  return keyFn ? toType(type, keyFn) : toType(type);
}
