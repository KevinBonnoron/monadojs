import { describe, expect, it } from 'vitest';
import { parseFunction } from './function.utils';

describe('FunctionUtils', () => {
  // it('should return the function number of parameter', () => {
  //   function oneRequiredParameterFn(a: number) {
  //     return a;
  //   }
  //   function oneRequiredParameterAndOneDefaultParameterFn(a: number, b = 5) {
  //     return a + b;
  //   }

  //   expect(functionParameterParser(oneRequiredParameterFn).all.length).toEqual(1);
  //   expect(functionParameterParser(oneRequiredParameterAndOneDefaultParameterFn).all.length).toEqual(2);
  // });

  describe('extractFunctionParameters', () => {
    it.each([
      { fn: 'function test() {}', expected: { name: 'test', parameters: [] } },
      { fn: function test() {}, expected: { name: 'test', parameters: [] } },
      { fn: 'function() {}', expected: { name: '', parameters: [] } },
      // biome-ignore lint/complexity/useArrowFunction: <explanation>
      { fn: function () {}, expected: { name: '', parameters: [] } },
      { fn: '() => {}', expected: { name: '', parameters: [] } },
      { fn: () => {}, expected: { name: '', parameters: [] } },
      {
        fn: 'function test(a, b, c) {}',
        expected: {
          name: 'test',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: true },
          ],
        },
      },
      {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        fn: function test(a: any, b: any, c: unknown) {},
        expected: {
          name: 'test',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: true },
          ],
        },
      },
      {
        fn: 'function(a, b, c) {}',
        expected: {
          name: '',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: true },
          ],
        },
      },
      {
        fn: '(a, b, c) => {}',
        expected: {
          name: '',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: true },
          ],
        },
      },
      {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        fn: (a: any, b: any, c: unknown) => {},
        expected: {
          name: '',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: true },
          ],
        },
      },
      {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        fn: (a: any, b: any, c = 5) => {},
        expected: {
          name: '',
          parameters: [
            { name: 'a', required: true },
            { name: 'b', required: true },
            { name: 'c', required: false, value: '5' },
          ],
        },
      },
    ])('should return function parameters', ({ fn, expected }) => {
      expect(parseFunction(fn)).toStrictEqual(expected);
    });
  });
});
