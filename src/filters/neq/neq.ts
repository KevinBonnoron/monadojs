import { not } from '../../logicals/not/not';
import { eq } from '../eq/eq';

export const neq = (expected: unknown) => not(eq(expected));
