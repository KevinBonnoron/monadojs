import { eq } from '../../filters';
import { Operator } from '../../types';
import { isCollection, isMap, ɵcopyCollection } from '../../utils';
import { findIndex } from '../find-index/find-index';
import { identity } from '../identity/identity';
import { pipe } from '../pipe/pipe';

export const unique =
  (operator: Operator = identity()) =>
  <S>(source: S) => {
    // For Map we must extract the value
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const valueOperator = isMap(source) ? ([, value]: any) => operator(value) : operator;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const uniqueImpl = (value: any, index: number, array: any) => findIndex(pipe(valueOperator, eq(valueOperator(value))))(array) === index;

    return isCollection(source) ? ɵcopyCollection(source, [...source].filter(uniqueImpl)) : source;
  };
