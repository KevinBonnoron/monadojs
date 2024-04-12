import type { ObjectPath } from '../../types';
import { accessor } from '../../utils/object/accessor/accessor';

export function set<P extends string, V>(path: P, value: V) {
  return <S extends Record<PropertyKey, unknown>>(source: S) => accessor(source, path).set(value as ObjectPath<S, P>);
}
