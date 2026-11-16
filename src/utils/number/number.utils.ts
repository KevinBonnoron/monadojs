export function round(source: number, decimalCount = 2): number {
  const factor = 10 ** decimalCount;
  return Math.round(source * factor) / factor;
}
