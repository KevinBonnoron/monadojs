import { isCollection, isNil, isPlainObject } from '../../utils';
import { keys } from '../keys/keys';

export const length =
  () =>
  <S>(source: S) =>
    isNil(source) ? 0 : isCollection<S>(source) ? [...source.entries()].length : isPlainObject<S>(source) ? [...keys()(source)].length : 0;
