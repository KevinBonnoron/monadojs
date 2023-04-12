import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';

export const haveSameType = <T, S>(o1: T, o2: S) =>
  isNil(o1)
    ? false
    : isNil(o2)
    ? false
    : isArray(o1) && !isArray(o2)
    ? false
    : !isArray(o1) && isArray(o2)
    ? false
    : isArray(o1) && isArray(o2)
    ? o1.length === o2.length && o1.every((value, index) => typeof value === typeof o2[index])
    : typeof o1 === typeof o2;
