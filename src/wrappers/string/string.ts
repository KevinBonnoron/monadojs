import { empty } from '../../filters';

type StringFunction<T> = (value: string) => T;

const wrapOperator =
  <F extends (...args: never[]) => unknown>(fn: F, ...args: Parameters<F>) =>
  (source: string) =>
    fn.call(source, ...args) as ReturnType<F>;

export const string = {
  capitalize: (): StringFunction<string> => (source: string) => `${source.charAt(0).toUpperCase()}${source.slice(1).toLowerCase()}`,
  charAt: (pos: number): StringFunction<string> => wrapOperator(String.prototype.charAt, pos),
  charCodeAt: (index: number): StringFunction<number> => wrapOperator(String.prototype.charCodeAt, index),
  codePointAt: (pos: number): StringFunction<number | undefined> => wrapOperator(String.prototype.codePointAt, pos),
  concat: (...strings: string[]): StringFunction<string> => wrapOperator(String.prototype.concat, ...strings),
  endsWith: (searchString: string, endPosition?: number): StringFunction<boolean> => wrapOperator(String.prototype.endsWith, searchString, endPosition),
  empty,
  indexOf: (searchString: string, position?: number): StringFunction<number> => wrapOperator(String.prototype.indexOf, searchString, position),
  lastIndexOf: (searchString: string, position?: number): StringFunction<number> => wrapOperator(String.prototype.lastIndexOf, searchString, position),
  normalize: (form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): StringFunction<string> => wrapOperator(String.prototype.normalize, form),
  replace:
    (search: string | RegExp, replacement: string): StringFunction<string> =>
    (source: string) =>
      source.replace(search, replacement),
  startsWith: (searchString: string, position?: number): StringFunction<boolean> => wrapOperator(String.prototype.startsWith, searchString, position),
  substring:
    (start: number, length?: number): StringFunction<string> =>
    (source: string) =>
      source.substring(start, length !== undefined ? start + length : undefined),
  toLocaleLowerCase: (): StringFunction<string> => wrapOperator(String.prototype.toLocaleLowerCase),
  toLocaleUpperCase: (): StringFunction<string> => wrapOperator(String.prototype.toLocaleUpperCase),
  toLowerCase: (): StringFunction<string> => wrapOperator(String.prototype.toLowerCase),
  toUpperCase: (): StringFunction<string> => wrapOperator(String.prototype.toUpperCase),
};
