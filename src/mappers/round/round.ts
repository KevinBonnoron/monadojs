export const round =
  (decimalCount: number = 2) =>
  (source: number) =>
    Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
