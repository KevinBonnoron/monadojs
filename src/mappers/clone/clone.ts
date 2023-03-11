import { entries } from '../../operators';
import { isArray, isDate, isMap, isObject, isSet } from '../../utils';

const cloneImpl = <T>(object: T) => {
  const cloned: T = {} as T;

  for (const [key, value] of entries<T>()(object)) {
    if (isObject(value)) {
      cloned[key] = clone()(value);
    } else if (isArray(value)) {
      cloned[key] = value.map(clone()) as any;
    } else {
      cloned[key] = value;
    }
  }

  return cloned as T;
};

export const clone =
  () =>
  <S>(source: S): S =>
    isArray<S>(source)
      ? ([...source.map(clone())] as S)
      : isMap(source)
      ? (new Map([...source].map(clone())) as S)
      : isSet(source)
      ? (new Set([...source].map(clone())) as S)
      : isDate(source)
      ? (new Date(+source) as S)
      : isObject<S>(source)
      ? cloneImpl<S>(source)
      : source;
