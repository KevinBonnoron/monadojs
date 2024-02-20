import { isPlainObject } from '../../utils';
import { clone } from '../clone/clone';
import { entries } from '../entries/entries';

export const freeze =
  (deep = true) =>
  <S>(source: S): S => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const cloned: any = clone()(source);
    if (deep && isPlainObject(source)) {
      for (const [key, value] of entries()(cloned)) {
        cloned[key] = freeze(deep)(value);
      }
    }

    return Object.freeze(cloned);
  };
