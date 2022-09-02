import { not } from '../../logicals/not/not';
import { eq } from '../eq/eq';

export const neq = <T>(expected: T) => not(eq(expected));
