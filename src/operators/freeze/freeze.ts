import { isPlainObject } from '../../utils';
import { cloneObject } from '../../utils/object/clone-object/clone-object';
import { entries } from '../entries/entries';

export function freeze(deep = true) {
  return <S>(source: S): S => {
    const cloned = cloneObject(source);
    if (deep && isPlainObject(source)) {
      for (const [key, value] of entries()(cloned)) {
        cloned[key] = freeze(deep)(value);
      }
    }

    return Object.freeze(cloned);
  };
}
