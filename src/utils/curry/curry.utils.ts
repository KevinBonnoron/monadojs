import type { AnyFunction } from '../../types';
import { parseFunction } from '../function/function.utils';
import { isFunction, isTrue } from '../object';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Curry<T> = (arg: T) => Curry<T> | any;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type PartialTuple<TUPLE extends any[], EXTRACTED extends any[] = []> = TUPLE extends [infer NEXT_PARAM, ...infer REMAINING] // If the tuple provided has at least one required value
  ? // recurse back in to this type with one less item
    // in the original tuple, and the latest extracted value
    // added to the extracted list as optional
    PartialTuple<REMAINING, [...EXTRACTED, NEXT_PARAM?]>
  : // else if there are no more values,
    // return an empty tuple so that too is a valid option
    [...EXTRACTED, ...TUPLE];

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type PartialParameters<FN extends (...args: any[]) => any> = PartialTuple<Parameters<FN>>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type RemainingParameters<PROVIDED extends any[], EXPECTED extends any[]> = EXPECTED extends [infer E1, ...infer EX] // if the expected array has any required items...
  ? // if the provided array has at least one required item
    PROVIDED extends [infer P1, ...infer PX]
    ? // if the type is correct, recurse with one item less
      //in each array type
      P1 extends E1
      ? RemainingParameters<PX, EX>
      : // else return this as invalid
        never
    : // else the remaining args is unchanged
      EXPECTED
  : // else there are no more arguments
    [];

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CurriedFunctionOrReturnValue<PROVIDED extends any[], FN extends (...args: any[]) => any> = RemainingParameters<PROVIDED, Parameters<FN>> extends [any, ...any[]] ? CurriedFunction<PROVIDED, FN> : ReturnType<FN>;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CurriedFunction<PROVIDED extends any[], FN extends (...args: any[]) => any> = <NEW_ARGS extends PartialTuple<RemainingParameters<PROVIDED, Parameters<FN>>>>(...args: NEW_ARGS) => CurriedFunctionOrReturnValue<[...PROVIDED, ...NEW_ARGS], FN>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const curry = <FN extends (...args: any[]) => any, STARTING_ARGS extends PartialParameters<FN>>(targetFn: FN, ...existingArgs: STARTING_ARGS): CurriedFunction<STARTING_ARGS, FN> => {
  const { parameters } = parseFunction(targetFn);
  const requiredParameters = parameters.map((parameter) => parameter.required).filter(isTrue);

  return (...args) => {
    const totalArgs = [...existingArgs, ...args];
    if (totalArgs.length >= requiredParameters.length) {
      return targetFn(...totalArgs);
    }

    return curry(targetFn, ...(totalArgs as PartialParameters<FN>));
  };
};

export const uncurry = <T>(fn: Curry<T>): AnyFunction<T> => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (...args: any[]) => {
    let current = fn;
    for (const arg of [...args]) {
      if (isFunction(current)) {
        current = current(arg);
      }
    }

    return current as unknown as T;
  };
};
