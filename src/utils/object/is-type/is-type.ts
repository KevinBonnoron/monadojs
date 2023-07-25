import { Maybe, MaybeConstructor, nil } from '../../../types';
import { isArray } from '../is-array/is-array';
import { isBoolean } from '../is-boolean/is-boolean';
import { isDate } from '../is-date/is-date';
import { isFunction } from '../is-function/is-function';
import { isMap } from '../is-map/is-map';
import { isMaybe } from '../is-maybe/is-maybe';
import { isNil } from '../is-nil/is-nil';
import { isNull } from '../is-null/is-null';
import { isNumber } from '../is-number/is-number';
import { isObject } from '../is-object/is-object';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';
import { isSet } from '../is-set/is-set';
import { isString } from '../is-string/is-string';
import { isSymbol } from '../is-symbol/is-symbol';
import { isUndefined } from '../is-undefined/is-undefined';

export function isType(type: null): (value: unknown) => value is null;
export function isType(type: undefined): (value: unknown) => value is undefined;
export function isType(type: nil): (value: unknown) => value is nil;
export function isType(type: StringConstructor): (value: unknown) => value is string;
export function isType(type: NumberConstructor): (value: unknown) => value is number;
export function isType(type: BooleanConstructor): (value: unknown) => value is boolean;
export function isType(type: SymbolConstructor): (value: unknown) => value is symbol;
export function isType(type: PromiseConstructor): (value: unknown) => value is Promise<unknown>;
export function isType(type: DateConstructor): (value: unknown) => value is Date;
export function isType(type: RegExpConstructor): (value: unknown) => value is RegExp;
export function isType(type: ArrayConstructor): (value: unknown) => value is Array<unknown>;
export function isType(type: SetConstructor): (value: unknown) => value is Set<unknown>;
export function isType(type: MapConstructor): (value: unknown) => value is Map<unknown, unknown>;
export function isType(type: MaybeConstructor): (value: unknown) => value is Maybe;
export function isType(type: ObjectConstructor): (value: unknown) => value is object;
export function isType(type: FunctionConstructor): (value: unknown) => value is (...args: any[]) => any;
export function isType<T>(type: T): (value: unknown) => value is T;
export function isType(type: any) {
  return (
    type === null ? isNull :
      type === undefined ? isUndefined :
        type === nil ? isNil :
          type === String ? isString :
            type === Number ? isNumber :
              type === Boolean ? isBoolean :
                type === Symbol ? isSymbol :
                  type === Promise ? isPromise :
                    type === Date ? isDate :
                      type === RegExp ? isRegExp :
                        type === Array ? isArray :
                          type === Set ? isSet :
                            type === Map ? isMap :
                              type === Maybe ? isMaybe :
                                type === Object ? isObject :
                                  type === Function ? isFunction :
                                    (value: unknown) => value?.constructor === type
  );
}
