export const pow =
  (power: number) =>
  <T extends number>(value: T) =>
    Math.pow(value, power);
