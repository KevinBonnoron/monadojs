import { isArray } from '../../utils';

export const values =
  <T extends object>() =>
  (values: T | T[]) =>
    isArray(values) ? [...values.values()] : Object.values(values);
