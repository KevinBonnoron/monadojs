export const plus =
  (amount: number = 1) =>
  <T extends number>(source: T) =>
    source + amount;
