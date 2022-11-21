import { identity } from '../../operators';
import { Operator } from '../../types';

export const unique =
  (operator: Operator = identity() as Operator) =>
  <T>(value: T, index?: number, array?: T[]) =>
    array?.findIndex((arrayElement) => operator(arrayElement) === operator(value)) === index;
