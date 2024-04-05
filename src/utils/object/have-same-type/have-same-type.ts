import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';
import { isPlainObject } from '../is-plain-object/is-plain-object';

export const haveSameType = <T, S>(o1: T, o2: S): boolean => {
  const checkValue = (operator: (value: T | S) => boolean) => operator(o1) === operator(o2);
  return checkValue(isNil) && checkValue(isArray) && isArray(o1) && isArray(o2) ? o1.length === o2.length && o1.every((value, index) => typeof value === typeof o2[index]) : checkValue(isPlainObject) && typeof o1 === typeof o2;
};
