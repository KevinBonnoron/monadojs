import { Operator } from '../../types';

export const not =
  <T>(operator: Operator): Operator =>
  (value: T) =>
    !operator(value);
