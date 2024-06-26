import { not } from '../../logicals/not/not';
import { prop } from '../../mappers/prop/prop';
import { pipe } from '../../operators/pipe/pipe';
import type { Filter, Mapper, Maybe, Operator } from '../../types';
import { Just, isCollection, isFunction, isMaybe, isNil, isRegExp, isString } from '../../utils';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface Match<S = any, O = any> {
  if?: Filter<S> | Maybe<S> | typeof Just | RegExp;
  then: O | Mapper<S, O>;
}
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Matches<S = any, O = any> = Match<S, O>[];

const returnResult = <S, O>(match: Match<S, O>, value: S): O => {
  if (isFunction(match.then)) {
    return match.then(value);
  }

  return match.then;
};

const matchJust = (value: unknown): value is typeof Just => (isMaybe(value) && value.isJust) || !isNil(value);

const matchImpl =
  (ifMatches: Matches, elseMatch?: Match) =>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  <S>(source: S): any => {
    const value = isMaybe(source) ? source.value : source;
    for (const match of ifMatches) {
      // handle Maybe constructor
      if (match.if === Just) {
        if (matchJust(value)) {
          return returnResult(match, value);
        }
      } else if ((isFunction(match.if) && match.if(value)) || (isMaybe(match.if) && match.if.equals(value)) || (isRegExp(match.if) && isString(value) && match.if.test(value))) {
        return returnResult(match, value);
      }
    }

    if (elseMatch) {
      return returnResult(elseMatch, value);
    }

    return value;
  };

export function match(matches: Matches): Operator {
  const ifMatches = matches.filter(pipe(prop('if'), not(isNil)));
  let elseMatch = matches.find(pipe(prop('if'), isNil));
  if (!elseMatch) {
    // biome-ignore lint/suspicious/noThenProperty: <explanation>
    elseMatch = { then: (value: unknown) => value };
  }

  return <S>(source: S): unknown => (isCollection<S>(source) ? [...source.values()].map(matchImpl(ifMatches, elseMatch)) : matchImpl(ifMatches, elseMatch)(source));
}
