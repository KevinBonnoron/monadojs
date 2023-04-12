import { nil } from '../../../types';
import { isNull } from '../is-null/is-null';
import { isUndefined } from '../is-undefined/is-undefined';

/**
 * Type guard for
 * @example value === null || value === undefined
 * @param value
 * @returns boolean
 */
export const isNil = (value: any): value is nil => isNull(value) || isUndefined(value);
