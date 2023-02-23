import { isArray, isPlainObject } from '../../utils';

const pickImpl = <T, P extends keyof T>(object: T, properties: P[]) =>
  properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as Partial<T>);

export const pick =
  <P extends keyof S, S = any>(...properties: P[]) =>
  (source: S): Pick<S, P> =>
    isArray<S>(source) ? source.map(pick(...properties)) : isPlainObject<S>(source) ? pickImpl(source, properties) : (source as any);
