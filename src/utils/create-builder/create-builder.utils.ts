import { cloneObject } from '../object/clone-object/clone-object';

export type Builder<T extends object, K extends keyof T = keyof T> = [K] extends [never] ? (overrides?: Partial<T>) => T : { [P in K]-?: (value: Exclude<T[P], undefined>) => Builder<T, Exclude<K, P>> };

/**
 * Allow to create a builder from a type
 */
export function createBuilder<T extends object>(): Builder<T>;
export function createBuilder<T extends object, F = Partial<T>>(from: F): Builder<T>;
export function createBuilder<T extends object>(from: Partial<T> = {}) {
  const object: T = cloneObject<T>(from as T);
  const impl = new Proxy(new Function(), {
    get(_, property) {
      return (value: T[keyof T]) => {
        object[property as keyof T] = value;
        return impl;
      };
    },

    apply(target, thisArg, [overrides]) {
      return cloneObject({
        ...object,
        ...overrides,
      });
    },
  });

  return impl as Builder<T>;
}
