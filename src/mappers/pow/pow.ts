export const pow =
  (power: number) =>
  <T extends number>(values: T) =>
    Math.pow(values, power);
