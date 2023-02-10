import { isArray, isNumber } from '../../utils';

export const divide =
  <O>(amount: number = 1) =>
  <T>(source: T): O =>
    isArray<number>(source) ? (source.map(divide(amount)) as O) : isNumber(source) ? ((source / amount) as O) : (NaN as O);
