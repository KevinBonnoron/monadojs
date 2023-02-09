import { Filter, Mapper, matchJust, Maybe } from '../../types';
import { isFunction, isMaybe, isRegExp, isString, Just } from '../../utils';

interface Match<T, S> {
  if: Filter<T> | Maybe<T> | typeof Just | RegExp;
  then: S | Mapper<T, S>;
}

export const match =
  <T, S>(matches: Match<T, S>[]) =>
  (source: T) => {
    for (const match of matches) {
      let currentValue = source;
      if (isMaybe(source)) {
        currentValue = source.value;
      }

      const returnResult = () => {
        if (isFunction(match.then)) {
          return match.then(currentValue);
        }

        return match.then;
      };

      // handle Maybe constructor
      if (match.if === Just) {
        if (matchJust(currentValue)) {
          return returnResult();
        }
      } else if (
        (isFunction(match.if) && match.if(currentValue)) ||
        (isMaybe(match.if) && match.if.equals(currentValue)) ||
        (isRegExp(match.if) && isString(currentValue) && match.if.test(currentValue))
      ) {
        return returnResult();
      }
    }

    return source;
  };
