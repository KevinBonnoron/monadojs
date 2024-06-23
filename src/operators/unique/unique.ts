import { eq } from '../../filters/eq/eq';
import type { Collection, Operator } from '../../types';
import { isCollection, isMap, ɵcopyCollection } from '../../utils';
import { findIndex } from '../find-index/find-index';
import { identity } from '../identity/identity';
import { pipe } from '../pipe/pipe';

export function unique(operator: Operator = identity()): <S extends Collection>(source: S) => S {
  return <S extends Collection>(source: S) => {
    // For Map we must extract the value
    const valueOperator = isMap(source) ? ([, value]: [unknown, unknown]) => operator(value) : operator;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const uniqueImpl = (value: any, index: number, array: unknown[]) => findIndex(pipe(valueOperator, eq(valueOperator(value))))(array) === index;

    return (isCollection(source) ? ɵcopyCollection(source, [...source].filter(uniqueImpl)) : source) as S;
  };
}
