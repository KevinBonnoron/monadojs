export const round =
  (decimalCount: number = 2) =>
  <T extends number>(source: T) =>
    Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
