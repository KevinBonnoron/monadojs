export const round =
  (decimalCount: number = 2) =>
  <T extends number>(value: T) =>
    Math.floor(value * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
