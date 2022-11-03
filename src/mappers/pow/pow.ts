export const pow =
  <T extends number>(power: number) =>
  (value: T) =>
    Math.pow(value, power);
