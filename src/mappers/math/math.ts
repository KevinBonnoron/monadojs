import { AnyFunction } from '../../types';
import { round } from '../../utils/number/number.utils';

type OmitFirstArg<T extends unknown[]> = T extends [unknown, ...infer U] ? U : []

const wrapOperator = <F extends AnyFunction<number>>(fn: F, ...args: OmitFirstArg<Parameters<F>>) => (source: number) => fn(source, ...args);

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
  divide: (amount = 1) => (source: number) => source / amount,
  exp: () => wrapOperator(Math.exp),
  expm1: () => wrapOperator(Math.expm1),
  floor: () => wrapOperator(Math.floor),
  fround: () => wrapOperator(Math.fround),
  hypot: () => wrapOperator(Math.hypot),
  log: () => wrapOperator(Math.log),
  minus: (amount = 1) => (source: number) => source - amount,
  modulo: (amount = 1) => (source: number) => source % amount,
  plus: (amount = 1) => (source: number) => source + amount,
  pow: (power: number) => wrapOperator(Math.pow, power),
  round: (decimalCount?: number) => wrapOperator(round, decimalCount),
  times: (amount: number) => (source: number) => source * amount,
  trunc: () => wrapOperator(Math.trunc),
  sign: () => wrapOperator(Math.sign),
}
