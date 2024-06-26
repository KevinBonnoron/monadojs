import { isCollection } from '../is-collection/is-collection';
import { isDate } from '../is-date/is-date';
import { isMaybe } from '../is-maybe/is-maybe';
import { isObject } from '../is-object/is-object';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';

/**
 * Type guard for plainobject (not Date | RegExp | Map | Set | Array | Promise | Maybe)
 *
 * @param value
 * @returns
 */
export function isPlainObject<T>(value: unknown): value is T & object {
  return isObject(value) && !isDate(value) && !isRegExp(value) && !isCollection(value) && !isPromise(value) && !isMaybe(value);
}
