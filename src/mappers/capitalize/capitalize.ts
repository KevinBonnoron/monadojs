import { lower } from '../lower/lower';
import { upper } from '../upper/upper';

export const capitalize =
  () =>
  <T extends string>(source: T) =>
    `${upper()(source.charAt(0))}${lower()(source.slice(1))}`;
