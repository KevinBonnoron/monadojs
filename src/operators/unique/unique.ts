import { identity } from '..';
import { Operator } from '../../types';
import { isArray, isMap } from '../../utils';

export const unique =
  (operator: Operator = identity() as Operator) =>
  <T>(source: T) =>
    isArray<T>(source)
      ? source.filter((value, index, array) => array.findIndex((v) => operator(v) === operator(value)) === index)
      : isMap(source)
      ? new Map([...source].filter(([_, value], index, array) => array.findIndex(([, v]) => operator(v) === operator(value)) === index))
      : source;
