import { keys } from '../../operators/keys/keys';
import { isPlainObject } from '../../utils';

const excludeImpl = <T extends Record<P, V>, P extends PropertyKey, V>(value: T, ...properties: P[]) => [...keys()(value)].reduce((object, key) => {
    if (!properties.includes(key as P)) {
      object[key] = (value as any)[key];
    }

    return object;
  }, {} as Partial<T>);

export const exclude =
  <P extends PropertyKey>(...properties: P[]) => <S extends Record<P, O>, O>(source: S): Omit<S, P> => isPlainObject(source) ? excludeImpl(source, ...properties) : ({} as any);
