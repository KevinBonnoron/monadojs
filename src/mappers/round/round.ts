export const round =
  (decimalCount: number = 2) =>
  <S extends number>(source: S) =>
    Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
