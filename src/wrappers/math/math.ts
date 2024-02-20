import { round } from '../../utils/number/number.utils';

type OmitFirstArg<T extends unknown[]> = T extends [unknown, ...infer U] ? U : [];

const wrapOperator =
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    <F extends (...args: any[]) => unknown>(fn: F, ...args: OmitFirstArg<Parameters<F>>) =>
    (source: number) =>
      fn(source, ...args) as ReturnType<F>;

export const math = {
  abs: () => wrapOperator(Math.abs),
  acos: () => wrapOperator(Math.acos),
  acosh: () => wrapOperator(Math.acosh),
  asin: () => wrapOperator(Math.asin),
  asinh: () => wrapOperator(Math.asinh),
  atan: () => wrapOperator(Math.atan),
  atanh: () => wrapOperator(Math.atanh),
  cbrt: () => wrapOperator(Math.cbrt),
  ceil: () => wrapOperator(Math.ceil),
  clz32: () => wrapOperator(Math.clz32),
  cos: () => wrapOperator(Math.cos),
  cosh: () => wrapOperator(Math.cos),
  exp: () => wrapOperator(Math.exp),
  expm1: () => wrapOperator(Math.expm1),
  floor: () => wrapOperator(Math.floor),
  fround: () => wrapOperator(Math.fround),
  hypot: () => wrapOperator(Math.hypot),
  log: () => wrapOperator(Math.log),
  pow: (power: number) => wrapOperator(Math.pow, power),
  round: (decimalCount?: number) => wrapOperator(round, decimalCount),
  trunc: () => wrapOperator(Math.trunc),
  sign: () => wrapOperator(Math.sign),
};
