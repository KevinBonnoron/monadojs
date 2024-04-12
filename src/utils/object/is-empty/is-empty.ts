import type { DeepNonNullable } from '../../../types/deep-non-nullable.type';
import { isCollection } from '../is-collection/is-collection';
import { isDate } from '../is-date/is-date';
import { isFunction } from '../is-function/is-function';
import { isMaybe } from '../is-maybe/is-maybe';
import { isNil } from '../is-nil/is-nil';
import { isPlainObject } from '../is-plain-object/is-plain-object';
import { isPrimitive } from '../is-primitive/is-primitive';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';
import { isString } from '../is-string/is-string';

/**
 * Check if passed `value` is empty.
 *
 * Return true for :
 * - null,
 * - undefined,
 * - ''
 * - [],
 * - new Set([])
 * - new Map([])
 * - Invalid Date
 * - Nothing
 * - {}
 * @param value
 * @returns boolean
 */
export function isEmpty<T>(value: T): value is T & DeepNonNullable<T> {
  return isNil(value)
    ? true
    : isString(value)
      ? value.length === 0
      : isPrimitive(value) || isFunction(value) || isPromise(value) || isRegExp(value)
        ? false
        : isCollection(value)
          ? [...value].length === 0
          : isDate(value)
            ? Number.isNaN(Number(value))
            : isMaybe(value)
              ? value.isNothing
              : isPlainObject(value)
                ? Object.keys(value).length === 0
                : false;
}
