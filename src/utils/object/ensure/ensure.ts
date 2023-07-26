/* eslint-disable @typescript-eslint/ban-types */
import { isObject } from '../is-object/is-object';

interface ErrorEnsureOptions {
  error: Error;
}

interface DefaultValueEnsureOptions<T> {
  defaultValue: T;
}

type EnsureOptions<T> = ErrorEnsureOptions | DefaultValueEnsureOptions<T>;

const isErrorEnsureOptions = (value: unknown): value is ErrorEnsureOptions => isObject(value) && 'error' in value && Object.keys(value).length === 1;
const isDefaultValueEnsureOptions = (value: unknown): value is DefaultValueEnsureOptions<unknown> => isObject(value) && 'defaultValue' in value && Object.keys(value).length === 1;
const isEnsureOptions = (value: unknown): value is EnsureOptions<unknown> => isErrorEnsureOptions(value) || isDefaultValueEnsureOptions(value);

export function ensure<T>(value: T | undefined, error: Error): T & {};
export function ensure<T>(value: T | undefined, options: EnsureOptions<T>): T & {};
export function ensure<T>(value: T | undefined, defaultValue?: T): T & {};
export function ensure<T>(value: T | undefined, options?: T | Error | EnsureOptions<T>) {
  let error = new Error('Value required');
  let defaultValue: T | undefined = undefined;
  if (isEnsureOptions(options)) {
    if (isErrorEnsureOptions(options)) {
      error = options.error;
    }

    if (isDefaultValueEnsureOptions(options)) {
      defaultValue = options.defaultValue;
    }
  } else if (options instanceof Error) {
    error = options;
  } else {
    defaultValue = options;
  }

  if (value === null || value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }

    throw error;
  }
  
  return value;
}
