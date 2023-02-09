import { keys } from '../../operators';
import { isArray, isObject } from '../../utils';

const excludeImpl = <T, P extends keyof T>(value: T, ...properties: P[]) =>
  keys<T>()(value).reduce((object, key) => {
    if (!properties.includes(key as P)) {
      object[key] = (value as any)[key];
    }

    return object;
  }, {} as Partial<T>);

export const exclude =
  <T = any, P extends keyof T = any>(...properties: P[]) =>
  (source: T): Partial<T> =>
    isArray<T>(source) ? source.map(exclude(...properties)) : isObject<T>(source) ? excludeImpl(source, ...properties) : (source as any);
