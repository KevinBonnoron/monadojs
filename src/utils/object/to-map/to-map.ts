import { isArray } from '../is-array/is-array';
import { isSet } from '../is-set/is-set';

export const toMap = <K, V>(keyFn: (value: V, index: number) => K) => <S extends V>(source: S): Map<K, S> => (
  isArray<S>(source) ? new Map([...source.map((value, index) => [keyFn(value, index), value])] as any) :
  isSet<S>(source) ? new Map([...[...source].map((value, index) => [keyFn(value, index), value])] as any) :
  source
) as Map<K, S>;
