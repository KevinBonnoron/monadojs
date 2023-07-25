import { identity } from '../../operators';
import { abs } from '../abs/abs';
import { ceil } from '../ceil/ceil';
import { floor } from '../floor/floor';
import { pow } from '../pow/pow';
import { round } from '../round/round';
import { trunc } from '../trunc/trunc';

type MathFn = keyof Math;

export function math(mathFN: 'abs'): (source: unknown) => number;
export function math(mathFN: 'ceil'): (source: unknown) => number;
export function math(mathFN: 'floor'): (source: unknown) => number;
export function math(mathFN: 'pow', power: number): (source: unknown) => number;
export function math(mathFN: 'round', decimalCount?: number): (source: unknown) => number;
export function math(mathFN: 'trunc'): (source: unknown) => number;
export function math(mathFn: MathFn, extraArg?: any) {
  switch (mathFn) {
    case 'abs':
      return abs();
    case 'ceil':
      return ceil();
    case 'floor':
      return floor();
    case 'pow':
      return pow(extraArg);
    case 'round':
      return round(extraArg);
    case 'trunc':
      return trunc();
  }

  return identity; 
}
