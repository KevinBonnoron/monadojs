import { describe, expect, it } from 'vitest';
import { functionParameterParser } from './function.utils';

describe('FunctionUtils', () => {
  it('should return the function number of parameter', () => {
    function oneRequiredParameterFn(a: number) {return a;}
    function oneRequiredParameterAndOneDefaultParameterFn(a: number, b = 5) {return a+b;}

    expect(functionParameterParser(oneRequiredParameterFn).all.length).toEqual(1);
    expect(functionParameterParser(oneRequiredParameterAndOneDefaultParameterFn).all.length).toEqual(2);
  });
});
