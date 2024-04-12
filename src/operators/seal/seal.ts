import { isPlainObject } from '../../utils/object/is-plain-object/is-plain-object';
import { clone } from '../clone/clone';
import { entries } from '../entries/entries';

export function seal(deep = true) {
  return <S>(source: S): S => {
    const cloned: S = clone()(source);
    if (deep && isPlainObject<S>(source)) {
      for (const [key, value] of [...entries()(cloned)]) {
        cloned[key] = seal(deep)(value);
      }
    }

    return Object.seal(cloned);
  };
}
