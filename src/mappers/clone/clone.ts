import { entries } from '../../operators';
import { isArray, isDate, isMap, isObject, isSet } from '../../utils';

const cloneImpl = <T>(object: T) => {
  const cloned: T = {} as T;

  for (const [key, value] of entries<T>()(object)) {
    if (isObject(value)) {
      cloned[key] = clone()(value);
    } else {
      cloned[key] = value;
    }
  }

  return cloned as T;
};

export const clone =
  () =>
  <T>(source: T): T =>
    isArray<T>(source)
      ? ([...source.map(clone())] as T)
      : isMap(source)
      ? (new Map([...source].map(clone())) as T)
      : isSet(source)
      ? (new Set([...source].map(clone())) as T)
      : isDate(source)
      ? (new Date(+source) as T)
      : isObject<T>(source)
      ? cloneImpl<T>(source)
      : source;
