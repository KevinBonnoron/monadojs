import { entries } from '../../operators';
import { isArray, isObject } from '../../utils';

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
  <T>(value: T): T =>
    isArray<T>(value) ? ([...value.map(clone())] as T) : isObject<T>(value) ? cloneImpl<T>(value) : value;
