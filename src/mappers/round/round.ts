export const round =
  (decimalCount = 2) => (source: number) => Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
