import { not } from '../../logicals/not/not';
import { isEqual } from '../../utils';
import { eq } from '../eq/eq';

export const neq = <T>(unexpected: T, comparisonFn: (a: any, b: any) => boolean = isEqual) => not(eq(unexpected, comparisonFn));
