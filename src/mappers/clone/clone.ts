import { entries } from '../../operators';
import { isArray, isObject } from '../../utils';

const cloneImpl = <T>(values: T) => {
  const cloned: T = {} as T;

  for (const [key, value] of entries<T>()(values)) {
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
  <T>(values: T): T =>
    isArray<T>(values) ? ([...values.map(clone())] as T) : isObject<T>(values) ? cloneImpl<T>(values) : values;
