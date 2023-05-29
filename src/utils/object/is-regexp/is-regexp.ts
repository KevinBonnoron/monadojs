export const isRegExp = (value: unknown): value is RegExp => Object.prototype.toString.call(value) === '[object RegExp]';
