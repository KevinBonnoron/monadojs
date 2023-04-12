import { describe, expect, it } from 'vitest';
import { functionParameterParser } from './function.utils';

describe('FunctionUtils', () => {
  it('should return the function number of parameter', () => {
    function oneRequiredParameterFn(a: number) {}
    function oneRequiredParameterAndOneDefaultParameterFn(a: number, b = 5) {}

    expect(functionParameterParser(oneRequiredParameterFn).all.length).toEqual(1);
    expect(functionParameterParser(oneRequiredParameterAndOneDefaultParameterFn).all.length).toEqual(2);
  });
});
