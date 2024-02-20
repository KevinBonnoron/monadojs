import { haveSamePropertyNames } from '../have-same-property-names/have-same-property-names';
import { haveSameSymbols } from '../have-same-symbols/have-same-symbols';
import { isArray } from '../is-array/is-array';
import { isDate } from '../is-date/is-date';
import { isMap } from '../is-map/is-map';
import { isMaybe } from '../is-maybe/is-maybe';
import { isPlainObject } from '../is-plain-object/is-plain-object';
import { isPromise } from '../is-promise/is-promise';
import { isRegExp } from '../is-regexp/is-regexp';
import { isSet } from '../is-set/is-set';

export const isEqual = <T, V>(o1: T, o2: V): boolean => {
  const notBoth = (fn: (value: unknown) => boolean) => (fn(o1) && !fn(o2)) || (!fn(o1) && fn(o2));
  if (notBoth(isDate) || notBoth(isPromise) || notBoth(isArray) || notBoth(isSet) || notBoth(isMap) || notBoth(isMaybe) || notBoth(isRegExp)) {
    return false;
  }

  if (isArray(o1) && isArray(o2)) {
    return o1.length === o2.length && o1.every((value, index) => isEqual(value, o2[index]));
  }

  if (isSet(o1) && isSet(o2)) {
    return o1.size === o2.size && [...o1].every((value, index) => isEqual(value, [...o2][index]));
  }

  if (isMap(o1) && isMap(o2)) {
    return o1.size === o2.size && [...o1].every(([key, value]) => isEqual(value, o2.get(key)));
  }

  if (isDate(o1) && isDate(o2)) {
    return o1.getTime() === o2.getTime();
  }

  if (isMaybe(o1) && isMaybe(o2)) {
    return isEqual(o1.unwrap(), o2.unwrap());
  }

  if (isRegExp(o1) && isRegExp(o2)) {
    return o1.source === o2.source && o1.flags === o2.flags;
  }

  if (isPromise(o1) && isPromise(o2)) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return Object.getOwnPropertySymbols(o1).every((symbol) => (o1 as any)[symbol] === (o2 as any)[symbol]);
  }

  if (isPlainObject(o1) && isPlainObject(o2)) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return haveSamePropertyNames(o1, o2) && haveSameSymbols(o1, o2) && Object.getOwnPropertyNames(o1).every((propertyName) => isEqual((o1 as any)[propertyName], (o2 as any)[propertyName]));
  }

  return Object.is(o1, o2);
};
