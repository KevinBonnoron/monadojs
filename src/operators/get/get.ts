import type { ObjectPath } from '../../types';
import { accessor } from '../../utils/object/accessor/accessor';

export function get<P extends string>(path: P, defaultValue?: unknown) {
  return <S extends Record<PropertyKey, unknown>>(source: S): ObjectPath<S, P> => accessor(source, path).get(defaultValue as ObjectPath<S, P>);
}
