import { clone } from '../../mappers';
import { isPlainObject } from '../../utils';
import { entries } from '../entries/entries';

export const seal =
  (deep = true) =>
  <S>(source: S) => {
    const cloned: any = clone()(source);
    if (deep && isPlainObject(source)) {
      for (const [key, value] of entries()(cloned)) {
        cloned[key] = seal(deep)(value);
      }
    }

    return Object.seal(cloned);
  };
