import { UnwrapValue } from '../../types';
import { isArray, isCollection, isMap, isSet } from '../../utils';

const toSet = <T>(source: T): Set<T> => (isArray(source) || isMap(source) ? new Set([...source]) : source) as Set<T>;

const toArray = <T>(source: T) => (isCollection(source) ? [...source] : source) as T[];

const toMap = <T>(source: T, keyFn: (value: T) => PropertyKey) =>
  (isArray<T>(source)
    ? new Map([...source.map((value) => [keyFn(value), value])] as any)
    : isSet<T>(source)
    ? new Map([...[...source].map((value) => [keyFn(value), value])] as any)
    : source) as Map<any, T>;

export function to(type: SetConstructor): <T>(source: T) => Set<UnwrapValue<T>>;
export function to(type: ArrayConstructor): <T>(source: T) => UnwrapValue<T>[];
export function to<T, P extends PropertyKey>(type: MapConstructor, keyFn: (value: T) => P): (source: T) => Map<P, UnwrapValue<T>>;
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
