import { Operator } from '../../types';
import { isArray, isFunction, isMap } from '../../utils';

const noop = () => {};

const matchWithKey = <T extends PropertyKey>(matches: Record<PropertyKey, Operator>, value: T) => (Object.keys(matches).length > 1 ? (matches[value] ?? noop)(value) : matches[Object.keys(matches)[0]](value));
const matchWithMap = <T>(matches: Map<Operator, Operator>, value: T) => {
  for (const [match, operator] of matches) {
    if (isFunction(match) && match(value)) {
      return operator(value);
    }
  }
};

export const matchWith =
  <T extends PropertyKey>(matches: Record<PropertyKey, Operator> | Map<Operator, Operator>): Operator =>
  (values: T | T[]) =>
    isArray(values) ? values.map(matchWith(matches)) : isMap(matches) ? matchWithMap(matches, values) : matchWithKey(matches, values);
