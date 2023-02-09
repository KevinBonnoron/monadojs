import { isArray, isObject } from '../../utils';

const pickImpl = <T, P extends keyof T>(object: T, properties: P[]) =>
  properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as Partial<T>);

export const pick =
  <T = any, P extends keyof T = any>(...properties: P[]) =>
  (source: T): Partial<T> =>
    isArray<T>(source) ? source.map(pick(...properties)) : isObject<T>(source) ? pickImpl(source, properties) : (source as any);
