export const round = (source: number, decimalCount = 2): number => Math.floor(source * 10 ** decimalCount) / 10 ** decimalCount;
