import { isArray, isMap, isSet } from '../../utils';

export const concat =
  <S>(...sources: S[]) =>
  <T>(source: T) =>
    isArray<T>(source)
      ? source.concat(...(sources as unknown as T[]))
      : isMap(source)
      ? new Map([...source].concat(sources as [any, any][]))
      : isSet(source)
      ? new Set([...source].concat(...(sources as unknown as T[])))
      : [source].concat(...(sources as unknown as T[]));
