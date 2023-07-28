import { lower } from '../lower/lower';
import { upper } from '../upper/upper';

export const capitalize = <S extends string>() => (source: S) => `${upper()(source.charAt(0))}${lower()(source.slice(1))}`;
