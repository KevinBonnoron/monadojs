import { Operator } from '../../types';
import { isArray, isMap } from '../../utils';
import { identity } from '../identity/identity';

export const unique =
  (operator: Operator = identity()) =>
  <S>(source: S) =>
    (isArray<S>(source)
      ? source.filter((value, index, array) => array.findIndex((v) => operator(v) === operator(value)) === index)
      : isMap<any, S>(source)
      ? new Map([...source].filter(([_, value], index, array) => array.findIndex(([, v]) => operator(v) === operator(value)) === index))
      : source) as S;
