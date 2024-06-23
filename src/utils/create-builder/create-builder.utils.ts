import { entriesOf, isEmpty } from '../object';
import { cloneObject } from '../object/clone-object/clone-object';

export type InitialBuilder<T extends object, K extends keyof T = keyof T> = { [P in K]-?: (value: T[P]) => Builder<T, Exclude<K, P>> } & (<V extends Partial<T>>(values: V) => Builder<T, Exclude<keyof T, keyof typeof values>>);

export type Builder<T extends object, K extends keyof T = keyof T> = [K] extends [never] ? (overrides?: Partial<T>) => T : { [P in K]-?: (value: T[P]) => Builder<T, Exclude<K, P>> };

/**
 * Allow to create a builder from a type
 */
export function createBuilder<T extends object>(): InitialBuilder<T>;
export function createBuilder<T extends object, F = Partial<T>>(from: F): Builder<T>;
export function createBuilder<T extends object>(from: Partial<T> = {}) {
  const object: T = cloneObject<T>(from as T);
  const impl: unknown = new Proxy(new Function(), {
    get(_, property) {
      return (value: T[keyof T]) => {
        object[property as keyof T] = value;
        return impl;
      };
    },

    apply(target, thisArg, [overrides]) {
      if (isEmpty(object) && overrides) {
        for (const [key, value] of entriesOf(overrides)) {
          object[key as keyof T] = value;
        }
        return impl;
      }

      return cloneObject({
        ...object,
        ...overrides,
      });
    },
  });

  return impl as Builder<T>;
}
