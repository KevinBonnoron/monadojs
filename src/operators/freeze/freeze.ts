import type { DeepReadonly } from '../../types';
import { entriesOf, isPlainObject } from '../../utils';
import { cloneObject } from '../../utils/object/clone-object/clone-object';

export function freeze(deep: true): <S>(source: S) => DeepReadonly<S>;
export function freeze(deep: false): <S>(source: S) => Readonly<S>;
export function freeze(): <S>(source: S) => DeepReadonly<S>;
export function freeze(deep = true): unknown {
  return <S>(source: S) => {
    const cloned = cloneObject(source);
    if (deep && isPlainObject<S>(source)) {
      for (const [key, value] of entriesOf(cloned)) {
        cloned[key] = freeze(deep)(value) as S[keyof S];
      }
    }

    return Object.freeze(cloned);
  };
}
