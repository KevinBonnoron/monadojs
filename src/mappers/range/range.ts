export const range =
  <T extends number>(inMin: number, inMax: number, outMin: number, outMax: number) =>
  (value: T) =>
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
