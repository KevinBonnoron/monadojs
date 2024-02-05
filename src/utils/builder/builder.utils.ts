import { clone } from '../../operators/clone/clone';
import { isFunction, isPlainObject, valuesOf } from '../object';

type CompletedBuilder<T> = { $get: () => T; };
export type Builder<T extends object, K extends keyof T = keyof T> = CompletedBuilder<T> & { [P in K]: (value: T[P]) => Builder<T, Exclude<K, P>>; };

const isBuilder = <T extends object>(value: unknown): value is Builder<T> => isPlainObject(value) && [...valuesOf(value)].every((value) => isFunction(value));

export function createBuilder<T extends object, K extends keyof T>(from: Builder<T, K>): Builder<T, K>;
export function createBuilder<T extends object>(from: Partial<T>): Builder<T>;
export function createBuilder<T extends object>(): Builder<T>;
export function createBuilder<T extends object>(from?: Builder<T> | Partial<T>) {
  if (isBuilder(from)) {
    return createBuilder(from.$get());
  }

  const object: Record<PropertyKey, unknown> = clone()(from ?? {});
  const impl: unknown = new Proxy({}, {
    get(_, property) {
      if (property === '$get') {
        return () => clone()(object);
      }

      return (value: unknown) => {
        object[property as keyof object] = value;
        return impl;
      }
    }
  });

  return impl as Builder<T>;
}
