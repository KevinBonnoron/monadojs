import { AnyFunction } from '../../types';
import { isEqual, isRegExp } from '../object';

interface Matcher {
  regex: RegExp;
  callback: AnyFunction;
}

const defaultCallback = (value: unknown) => value;

/**
 * This class is used to parse a string with different regex.
 */
class StringMatcher {
  private readonly matchers: Matcher[] = [];

  /**
   * Add a new matcher to this string matcher. Adding an already added regex will replace it.
   * @param regex
   * @param callback
   * @returns
   */
  match(regex: RegExp | string, callback: AnyFunction = defaultCallback): this {
    if (!isRegExp(regex)) {
      return this.match(new RegExp(regex), callback);
    }

    let existingMatcher = this.matchers.find((matcher) => isEqual(matcher.regex, regex));
    if (existingMatcher === undefined) {
      existingMatcher = { regex, callback };
      this.matchers.push(existingMatcher);
    } else {
      existingMatcher.callback = callback;
    }

    return this;
  }

  /**
   * Run all the matchers against the passed string until either string is completely parsed or no match are found.
   * Matcher that return false will be ignored and the next matchers will be tested.
   *
   * @param value the string to be checked
   * @returns void
   * @throws Error when no match are found
   */
  parse(value: string) {
    let currentValue = value;
    while (currentValue.length) {
      const lastValue = currentValue;
      for (const { regex, callback } of this.matchers) {
        const matches = currentValue.match(regex);
        if (matches) {
          const result = callback(matches.slice(1));
          if (result === false) {
            continue;
          }

          currentValue = currentValue.replace(regex, '');
          break;
        }
      }

      if (lastValue === currentValue) {
        // Infinite loop
        throw new Error(`Non matching case found. Remaining string: ${currentValue}`);
      }
    }
  }

  /**
   * Return the result of the first matched matchers. If none match the string, null is returned.
   * @param value the string to be checked
   * @returns T
   */
  query<T>(value: string) {
    for (const { regex, callback } of this.matchers) {
      const matches = value.match(regex);
      if (matches) {
        return callback(matches.slice(1)) as T;
      }
    }

    return null;
  }
}

export const stringMatcher = () => new StringMatcher();
