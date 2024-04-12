import { isPlainObject } from '../../utils';

function pickImpl<T, P extends keyof T>(object: T, properties: P[]): Pick<T, P> {
  // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
  return properties.reduce((accumulator, property) => ({ ...accumulator, [property]: object[property] }), {} as T);
}

export function pick<P extends PropertyKey>(...properties: P[]): <S extends Record<P, unknown>>(source: S) => Pick<S, P> {
  return <S extends Record<P, unknown>>(source: S): Pick<S, P> => (isPlainObject<S>(source) ? pickImpl(source, properties) : ({} as Pick<S, P>));
}
