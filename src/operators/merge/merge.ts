import { Operator } from '../../types';
import { isArray, isObject } from '../../utils';

const mergeImpl = <T, V>(target: T, ...sources: V[]): any => {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const [key, value] of Object.entries(source)) {
      if (isObject(value)) {
        if ((target as any)[key] === undefined) {
          Object.assign(target, { [key]: {} });
        }

        mergeImpl((target as any)[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  }

  return mergeImpl(target, ...sources);
};

export const merge =
  <T, V>(...sources: V[]): Operator<T, T & V> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(merge(sources)) : mergeImpl(values, ...sources);
