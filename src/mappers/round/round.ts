export const round = <S extends number>(decimalCount = 2) => (source: S) => Math.floor(source * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
