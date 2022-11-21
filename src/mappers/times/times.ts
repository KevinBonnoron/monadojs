export const times =
  (amount: number) =>
  <T extends number>(value: T) =>
    value * amount;
