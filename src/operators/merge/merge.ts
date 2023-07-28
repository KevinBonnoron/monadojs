import { Operator } from '../../types';
import { isArray, isObject } from '../../utils';
import { clone } from '../clone/clone';
import { entries } from '../entries/entries';

const mergeImpl = <T, V>(target: T, ...sources: V[]): any => {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const [key, value] of entries()(source)) {
      if (isObject(value)) {
        if ((target as V)[key] === undefined) {
          Object.assign(target, { [key]: {} });
        }

        mergeImpl((target as V)[key], value);
      } else if (isArray(value)) {
        if ((target as V)[key] === undefined) {
          Object.assign(target, { [key]: [] });
        }

        mergeImpl((target as V)[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    }
  } else if (isArray(target) && isArray(source)) {
    target.push(...source);
  }

  return mergeImpl(target, ...sources);
};

export const merge =
  <S, V>(...sources: V[]): Operator<S, S & V> => (source: S) => mergeImpl(clone()(source), ...sources);
