export const isRegExp = (value: any): value is RegExp => Object.prototype.toString.call(value) === '[object RegExp]';
