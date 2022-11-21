export const range =
  (inMin: number, inMax: number, outMin: number, outMax: number) =>
  <T extends number>(value: T) =>
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
