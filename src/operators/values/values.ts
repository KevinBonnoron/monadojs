import { isArray } from '../../utils';

export const values =
  () =>
  <T extends object>(values: T) =>
    isArray<T>(values) ? [...values.values()] : Object.values(values);
