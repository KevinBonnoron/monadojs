import { Operator } from '../../types';

export const not =
  <T>(operator: Operator) =>
  (value: T) =>
    !operator(value);
