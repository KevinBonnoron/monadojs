import { isArray, isNumber } from '../../utils';

export const divide =
  <O>(amount = 1) => <S>(source: S): O => isArray<number>(source) ? (source.map(divide(amount)) as O) : isNumber(source) ? ((source / amount) as O) : (NaN as O);
