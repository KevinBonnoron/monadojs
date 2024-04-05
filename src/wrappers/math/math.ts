import { round } from '../../utils/number/number.utils';

type OmitFirstArg<T extends unknown[]> = T extends [unknown, ...infer U] ? U : [];
type MathFunction = (value: number) => number;

const wrapOperator =
  <F extends (...args: number[]) => unknown>(fn: F, ...args: OmitFirstArg<Parameters<F>>) =>
  (source: number) =>
    fn(source, ...args) as ReturnType<F>;

export const math = {
  abs: (): MathFunction => wrapOperator(Math.abs),
  acos: (): MathFunction => wrapOperator(Math.acos),
  acosh: (): MathFunction => wrapOperator(Math.acosh),
  asin: (): MathFunction => wrapOperator(Math.asin),
  asinh: (): MathFunction => wrapOperator(Math.asinh),
  atan: (): MathFunction => wrapOperator(Math.atan),
  atanh: (): MathFunction => wrapOperator(Math.atanh),
  cbrt: (): MathFunction => wrapOperator(Math.cbrt),
  ceil: (): MathFunction => wrapOperator(Math.ceil),
  clz32: (): MathFunction => wrapOperator(Math.clz32),
  cos: (): MathFunction => wrapOperator(Math.cos),
  cosh: (): MathFunction => wrapOperator(Math.cos),
  exp: (): MathFunction => wrapOperator(Math.exp),
  expm1: (): MathFunction => wrapOperator(Math.expm1),
  floor: (): MathFunction => wrapOperator(Math.floor),
  fround: (): MathFunction => wrapOperator(Math.fround),
  hypot: (): MathFunction => wrapOperator(Math.hypot),
  log: (): MathFunction => wrapOperator(Math.log),
  pow: (power: number): MathFunction => wrapOperator(Math.pow, power),
  round: (decimalCount?: number): MathFunction => wrapOperator(round, decimalCount),
  trunc: (): MathFunction => wrapOperator(Math.trunc),
  sign: (): MathFunction => wrapOperator(Math.sign),
};
