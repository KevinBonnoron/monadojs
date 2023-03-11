/**
 * Allow to map a range of values to another one.
 *
 * @param inMin
 * @param inMax
 * @param outMin
 * @param outMax
 * @example
 * range(0, 10, 0, 50)(2) // returns 10
 * @returns
 */
export const range =
  (inMin: number, inMax: number, outMin: number, outMax: number) =>
  <S extends number>(source: S) =>
    ((source - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
