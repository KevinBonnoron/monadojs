import { keys } from '../../operators';
import { isArray, isPlainObject } from '../../utils';

const excludeImpl = <T, P extends keyof T>(value: T, ...properties: P[]) =>
  keys<T>()(value).reduce((object, key) => {
    if (!properties.includes(key as P)) {
      object[key] = (value as any)[key];
    }

    return object;
  }, {} as Partial<T>);

export const exclude =
  <P extends keyof T, T = any>(...properties: P[]) =>
  <S extends T>(source: S): Exclude<S, P> =>
    isArray<S>(source) ? source.map(exclude(...properties)) : isPlainObject<S>(source) ? excludeImpl(source, ...properties) : (source as any);
