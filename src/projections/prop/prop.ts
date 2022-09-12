import { isArray } from '../../utils';

export function prop<T, P extends keyof T>(property: P): (values: T) => T[P];
export function prop<T, P extends keyof T>(property: P): (values: T[]) => T[P][];
export function prop<T, P extends keyof T>(property: P) {
  return (values: T | T[]): T[P] | T[P][] => (isArray<T>(values) ? values.map(prop(property)) : values[property]);
}
