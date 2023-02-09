export const pow =
  (power: number) =>
  <T extends number>(source: T) =>
    Math.pow(source, power);
