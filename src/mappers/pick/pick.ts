import { isPlainObject } from '../../utils';

// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
const pickImpl = <T, P extends keyof T>(object: T, properties: P[]): Partial<T> => properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as Partial<T>);

export const pick =
  <P extends PropertyKey>(...properties: P[]) =>
  <S extends Record<P, unknown>>(source: S): Pick<S, P> =>
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    isPlainObject<S>(source) ? pickImpl(source, properties) : ({} as any);
