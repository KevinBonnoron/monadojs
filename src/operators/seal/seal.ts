import { entriesOf } from '../../utils';
import { isPlainObject } from '../../utils/object/is-plain-object/is-plain-object';
import { clone } from '../clone/clone';

export function seal(deep = true): <S>(source: S) => S {
  return <S>(source: S): S => {
    const cloned: S = clone()(source);
    if (deep && isPlainObject<S>(source)) {
      for (const [key, value] of entriesOf(cloned)) {
        cloned[key] = seal(deep)(value);
      }
    }

    return Object.seal(cloned);
  };
}
