import { not } from '../../logicals/not/not';
import { isEqual } from '../../utils/object/is-equal/is-equal';
import { eq } from '../eq/eq';

export const neq = <T>(unexpected: T, comparisonFn: <A, B>(a: A, b: B) => boolean = isEqual) => not(eq(unexpected, comparisonFn));
