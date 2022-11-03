import { lower } from '../lower/lower';
import { upper } from '../upper/upper';

export const capitalize =
  <T extends string>() =>
  (value: T) =>
    `${upper()(value.charAt(0))}${lower()(value.slice(1))}`;
