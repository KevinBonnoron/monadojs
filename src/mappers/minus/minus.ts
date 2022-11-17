export const minus =
  <T extends number>(amount: number = 1) =>
  (value: T) =>
    value - amount;