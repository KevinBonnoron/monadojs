import { Operator } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

const mergeImpl = <T, V>(target: T, ...sources: V[]): any => {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const [key, value] of entries<V>()(source)) {
      if (isObject(value)) {
        if ((target as V)[key] === undefined) {
          Object.assign(target, { [key]: {} });
        }

        mergeImpl((target as V)[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  }

  return mergeImpl(target, ...sources);
};

export const merge =
  <T, V>(...sources: V[]): Operator<T, T & V> =>
  (source: T) =>
    isArray<T>(source) ? source.map(merge(sources)) : mergeImpl(source, ...sources);
