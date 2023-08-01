import { isPlainObject } from '../../utils/object/is-plain-object/is-plain-object';
import { clone } from '../clone/clone';
import { entries } from '../entries/entries';

export const seal = (deep = true) => <S extends object>(source: S) => {
    const cloned: S = clone()(source);
    if (deep && isPlainObject(source)) {
      for (const [key, value] of [...entries()(cloned)]) {
        cloned[key] = seal(deep)(value);
      }
    }

    return Object.seal(cloned);
  };
