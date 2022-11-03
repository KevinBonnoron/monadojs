export const round =
  <T extends number>(decimalCount: number = 2) =>
  (value: T) =>
    Math.floor(value * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
