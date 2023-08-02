export const round = (source: number, decimalCount = 2) => Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
