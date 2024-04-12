export function round(source: number, decimalCount = 2): number {
  return Math.floor(source * 10 ** decimalCount) / 10 ** decimalCount;
}
