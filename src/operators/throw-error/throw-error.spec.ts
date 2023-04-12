import { describe, expect, it } from 'vitest';
import { throwError } from './throw-error';

describe('throw-error', () => {
  it('should throw error', () => {
    const source = new Error('test error');
    const operator = throwError(source);

    expect(() => operator()).toThrowError(source);
  });
});
