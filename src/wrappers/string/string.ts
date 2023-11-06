const wrapOperator = <F extends (...args: any[]) => unknown>(fn: F, ...args: Parameters<F>) => <S>(source: S) => fn.call(source, ...args) as ReturnType<F>;

export const string = {
  capitalize: () => (source: string) => `${source.charAt(0).toUpperCase()}${source.slice(1).toLowerCase()}`,
  charAt: (pos: number) => wrapOperator(String.prototype.charAt, pos),
  charCodeAt: (index: number) => wrapOperator(String.prototype.charCodeAt, index),
  codePointAt: (pos: number) => wrapOperator(String.prototype.codePointAt, pos),
  concat: (...strings: string[]) => wrapOperator(String.prototype.concat, ...strings),
  endsWith: (searchString: string, endPosition?: number) => wrapOperator(String.prototype.endsWith, searchString, endPosition),
  indexOf: (searchString: string, position?: number) => wrapOperator(String.prototype.indexOf, searchString, position),
  lastIndexOf: (searchString: string, position?: number) => wrapOperator(String.prototype.lastIndexOf, searchString, position),
  normalize: (form: "NFC" | "NFD" | "NFKC" | "NFKD") => wrapOperator(String.prototype.normalize, form),
  replace: (search: string | RegExp, replacement: string) => (source: string) => source.replace(search, replacement),
  startsWith: (searchString: string, position?: number) => wrapOperator(String.prototype.startsWith, searchString, position),
  substring: (start: number, length?: number) => (source: string) => source.substring(start, length !== undefined ? start + length : undefined),
  toLowerCase: () => wrapOperator(String.prototype.toLowerCase),
  toUpperCase: () => wrapOperator(String.prototype.toUpperCase),
};
