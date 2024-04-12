import type { ObjectPath } from '../../../types/object-path.type';
import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';
import { isPlainObject } from '../is-plain-object/is-plain-object';

interface Accessor<T> {
  get: (defaultValue?: T) => T;
  set: (value: T) => void;
}

const accessorBuilder = <P, T extends keyof P>(parent: P, property: T): Accessor<P[T]> => ({
  get: (defaultValue?: P[T]) => parent[property] ?? (defaultValue as P[T]),
  set: (value: P[T]) => {
    parent[property] = value;
  },
});

const EMPTY_ACCESSOR: Accessor<unknown> = {
  get: () => undefined,
  set: () => {
    /***/
  },
};

export function accessor<T, P extends keyof T & string>(object: T, path: P): Accessor<ObjectPath<T, P>> {
  const paths = path.split('.').flatMap((value) => {
    let matches = /([a-z]+)(\[([0-9]+)\]){0,1}/.exec(value);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const result: any = [];
    if (!matches) {
      matches = /([0-9]+)/.exec(value);
      if (!matches) {
        return result;
      }

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      matches[1] = Number.parseInt(matches[1]) as any;
    }

    result.push(matches[1]);
    if (matches[3] !== undefined) {
      result.push(Number.parseInt(matches[3]));
    }

    return result;
  });

  if (paths.length === 0) {
    return EMPTY_ACCESSOR as Accessor<ObjectPath<T, P>>;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let parent: any = object;
  while (paths.length > 1) {
    if (isPlainObject(parent) || isArray(parent)) {
      parent = parent[paths.shift() as keyof typeof parent];
    } else {
      parent = undefined;
    }

    if (isNil(parent)) {
      return EMPTY_ACCESSOR as Accessor<ObjectPath<T, P>>;
    }
  }

  const key = paths.shift();
  return accessorBuilder(parent, key);
}
