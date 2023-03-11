import { UnwrapValue } from '../../types';
import { isArray, isCollection, isMap, isSet } from '../../utils';

const toSet = <S>(source: S): Set<S> => (isArray(source) || isMap(source) ? new Set([...source]) : source) as Set<S>;

const toArray = <S>(source: S) => (isCollection(source) ? [...source] : source) as S[];

const toMap = <S>(source: S, keyFn: (value: S) => PropertyKey) =>
  (isArray<S>(source)
    ? new Map([...source.map((value) => [keyFn(value), value])] as any)
    : isSet<S>(source)
    ? new Map([...[...source].map((value) => [keyFn(value), value])] as any)
    : source) as Map<any, S>;

export function to(type: SetConstructor): <S>(source: S) => Set<UnwrapValue<S>>;
export function to(type: ArrayConstructor): <S>(source: S) => UnwrapValue<S>[];
export function to<S, P extends PropertyKey>(type: MapConstructor, keyFn: (value: S) => P): (source: S) => Map<P, UnwrapValue<S>>;
export function to(type: SetConstructor | ArrayConstructor | MapConstructor, keyFn?: (value: any) => PropertyKey) {
  return (source: any) =>
    type.prototype === Set.prototype
      ? toSet(source)
      : type.prototype === Array.prototype
      ? toArray(source)
      : type.prototype === Map.prototype && keyFn
      ? toMap(source, keyFn)
      : source;
}
