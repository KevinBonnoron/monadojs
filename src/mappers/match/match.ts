import { not } from '../../logicals';
import { pipe } from '../../operators';
import { Filter, Mapper, matchJust, Maybe } from '../../types';
import { isFunction, isMaybe, isNil, isRegExp, isString, Just } from '../../utils';
import { prop } from '../prop/prop';

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

export const match = <S, O>(matches: Match<S, O>[]) => {
  const ifMatches = matches.filter(pipe(prop('if'), not(isNil)));
  let elseMatch = matches.find(pipe(prop('if'), isNil));
  if (!elseMatch) {
    elseMatch = { then: (value: S) => value as unknown as O };
  }

  return (source: S) => {
    const currentValue = isMaybe(source) ? source.value : source;
    for (const match of ifMatches) {
      // handle Maybe constructor
      if (match.if === Just) {
        if (matchJust(currentValue)) {
          return returnResult(match, currentValue);
        }
      } else if (
        (isFunction(match.if) && match.if(currentValue)) ||
        (isMaybe(match.if) && match.if.equals(currentValue)) ||
        (isRegExp(match.if) && isString(currentValue) && match.if.test(currentValue))
      ) {
        return returnResult(match, currentValue);
      }
    }

    if (elseMatch) {
      return returnResult(elseMatch, currentValue);
    }

    return source;
  };
};
