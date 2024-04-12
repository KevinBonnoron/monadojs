import { isPlainObject, keysOf } from '../../utils';

function excludeImpl<T extends Record<P, V>, P extends PropertyKey, V>(value: T, ...properties: P[]) {
  return [...keysOf(value)].reduce((object, key) => {
    if (!properties.includes(key as P)) {
      object[key] = value[key];
    }

    return object;
  }, {} as T);
}

export function exclude<P extends PropertyKey>(...properties: P[]): <S extends Record<P, O>, O>(source: S) => Omit<S, P> {
  return <S extends Record<P, O>, O>(source: S): Omit<S, P> => (isPlainObject(source) ? excludeImpl(source, ...properties) : ({} as Omit<S, P>));
}
