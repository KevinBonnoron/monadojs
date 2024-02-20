import { entriesOf } from '../entries-of/entries-of';
import { isArray } from '../is-array/is-array';
import { isObject } from '../is-object/is-object';
import { isPlainObject } from '../is-plain-object/is-plain-object';

const mergeImpl = (target: unknown, ...sources: unknown[]): unknown => {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const [key, value] of entriesOf(source)) {
      if (isObject(value)) {
        if (target[key] === undefined) {
          Object.assign(target, { [key]: {} });
        }

        mergeImpl(target[key], value);
      } else if (isArray(value)) {
        if (target[key] === undefined) {
          Object.assign(target, { [key]: [] });
        }

        mergeImpl(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  } else if (isArray(target) && isArray(source)) {
    target.push(...source);
  }

  return mergeImpl(target, ...sources);
};

/**
 * Merge 2 objets or array together in an immutable fashion.
 * @param o1
 * @param o2
 * @returns
 */
export const merge = <T, S>(o1: T, o2: S): T & S => {
  if (isArray(o1) && isPlainObject(o2)) {
    throw new Error(`Can't merge array with object`);
  }
  if (isPlainObject(o1) && isArray(o2)) {
    throw new Error(`Can't merge object with array`);
  }

  let result = null;
  if (isArray(o1)) {
    result = [];
  } else if (isObject(o1)) {
    result = {};
  }

  return mergeImpl(result, o1, o2) as T & S;
};
