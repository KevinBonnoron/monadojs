import { Maybe, type MaybeConstructor } from '../../../types';
import { toArray } from '../to-array/to-array';
import { toBoolean } from '../to-boolean/to-boolean';
import { toDate } from '../to-date/to-date';
import { toFunction } from '../to-function/to-function';
import { toMap } from '../to-map/to-map';
import { toMaybe } from '../to-maybe/to-maybe';
import { toNull } from '../to-null/to-null';
import { toNumber } from '../to-number/to-number';
import { toRegExp } from '../to-regexp/to-regexp';
import { toSet } from '../to-set/to-set';
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from '../to-string/to-string';
import { toSymbol } from '../to-symbol/to-symbol';
import { toUndefined } from '../to-undefined/to-undefined';

export function toType(type: null): (value: unknown) => null;
export function toType(type: undefined): (value: unknown) => undefined;
export function toType(type: StringConstructor): (value: unknown) => string;
export function toType(type: NumberConstructor): (value: unknown) => number;
export function toType(type: BooleanConstructor): (value: unknown) => boolean;
export function toType(type: SymbolConstructor): (value: unknown) => symbol;
export function toType(type: DateConstructor): (value: unknown) => Date;
export function toType(type: RegExpConstructor): (value: unknown) => RegExp;
export function toType(type: ArrayConstructor): <V>(value: V) => V[];
export function toType(type: SetConstructor): <V>(value: V) => Set<V>;
export function toType<K, V>(type: MapConstructor, keyFn: (value: V, index: number) => K): <S extends V>(value: S) => Map<K, S>;
export function toType(type: MaybeConstructor): <V>(value: V) => Maybe<V>;
export function toType(type: null | undefined | StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor | DateConstructor | RegExpConstructor | ArrayConstructor | SetConstructor | MapConstructor | MaybeConstructor | FunctionConstructor, keyFn?: (value: unknown, index: number) => unknown) {
  return type === null
    ? toNull
    : type === undefined
      ? toUndefined
      : type === String
        ? toString
        : type === Number
          ? toNumber
          : type === Boolean
            ? toBoolean
            : type === Symbol
              ? toSymbol
              : type === Date
                ? toDate
                : type === RegExp
                  ? toRegExp
                  : type === Array
                    ? toArray
                    : type === Set
                      ? toSet
                      : type === Map
                        ? (value: unknown) => toMap(value, keyFn as () => unknown)
                        : type === Maybe
                          ? toMaybe
                          : type === Function
                            ? toFunction
                            : (value: unknown) => value;
}
