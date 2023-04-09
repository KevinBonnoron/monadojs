import { not } from '../../logicals/not/not';
import { prop } from '../../mappers/prop/prop';
import { pipe } from '../../operators/pipe/pipe';
import { Collection, Filter, Mapper, Maybe } from '../../types';
import { Just, isCollection, isFunction, isMaybe, isNil, isRegExp, isString } from '../../utils';

interface Match<S, O> {
  if?: Filter<S> | Maybe<S> | typeof Just | RegExp;
  then: O | Mapper<S, O>;
}

const returnResult = <S, O>(match: Match<S, O>, value: S) => {
  if (isFunction(match.then)) {
    return match.then(value);
  }

  return match.then;
};

const matchJust = (value: unknown) => (isMaybe(value) && value.isJust) || !isNil(value);

const matchImpl =
  <S, O>(ifMatches: Match<S, O>[], elseMatch?: Match<S, O>) =>
  (source: S): O => {
    const value = isMaybe(source) ? source.value : source;
    for (const match of ifMatches) {
      // handle Maybe constructor
      if (match.if === Just) {
        if (matchJust(value)) {
          return returnResult(match, value);
        }
      } else if (
        (isFunction(match.if) && match.if(value)) ||
        (isMaybe(match.if) && match.if.equals(value)) ||
        (isRegExp(match.if) && isString(value) && match.if.test(value))
      ) {
        return returnResult(match, value);
      }
    }

    if (elseMatch) {
      return returnResult(elseMatch, value);
    }

    return value;
  };

export const match = <S = any, O = any>(matches: Match<S, O>[]) => {
  const ifMatches = matches.filter(pipe(prop('if'), not(isNil)));
  let elseMatch = matches.find(pipe(prop('if'), isNil));
  if (!elseMatch) {
    elseMatch = { then: (value: S) => value as unknown as O };
  }

  return (source: Collection<S> | S) =>
    isCollection<S>(source) ? [...source.values()].map(matchImpl(ifMatches, elseMatch)) : matchImpl(ifMatches, elseMatch)(source);
};
