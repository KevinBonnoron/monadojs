import { AnyFunction } from '../../../types';

/**
 * Type guard for `typeof value === 'function'`
 * @param value
 * @returns boolean
 */
export const isFunction = (value: any): value is AnyFunction => typeof value === 'function';
