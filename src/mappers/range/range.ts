export const range =
  <T extends number>(inMin: number, inMax: number, outMin: number, outMax: number) =>
  (values: T) =>
    ((values - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
