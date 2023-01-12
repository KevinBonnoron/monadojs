import { ceil } from '../ceil/ceil';
import { floor } from '../floor/floor';
import { pow } from '../pow/pow';
import { trunc } from '../trunc/trunc';

type MathFunctions = 'ceil' | 'floor' | 'trunc' | 'pow';

export const math = (mathFn: MathFunctions, extraArg: any) => (mathFn === 'ceil' ? ceil() : mathFn === 'floor' ? floor() : mathFn === 'trunc' ? trunc() : mathFn === 'pow' ? pow(extraArg) : () => NaN);
