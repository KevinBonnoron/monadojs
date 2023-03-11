import { isArray, isMap, isNil, isPlainObject } from '../../utils';
import { keys } from '../keys/keys';

export const length =
  () =>
  <S>(source: S) =>
    isNil(source)
      ? 0
      : isArray<S>(source)
      ? source.length
      : isMap(source)
      ? keys()(source).length
      : isPlainObject<S>(source)
      ? keys()(source).length
      : 0;
