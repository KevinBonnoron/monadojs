import { isArray } from '../../utils';
import { prop } from '../prop/prop';

export function props<T, P extends keyof T>(...properties: P[]): (values: T) => T[P][];
export function props<T, P extends keyof T>(...properties: P[]): (values: T[]) => T[P][][];
export function props<T, P extends keyof T>(...properties: P[]) {
  return (values: T | T[]) => (isArray(values) ? values.map(props(...properties)) : properties.map(prop).map((predicate) => predicate(values as any)));
}
