import { isPlainObject } from '../../utils';

const pickImpl = <T, P extends keyof T>(object: T, properties: P[]) =>
  properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as Partial<T>);

export const pick =
  <P extends PropertyKey>(...properties: P[]) =>
  <S extends Record<P, O>, O>(source: S): Pick<S, P> =>
    isPlainObject<S>(source) ? pickImpl(source, properties) : ({} as any);
