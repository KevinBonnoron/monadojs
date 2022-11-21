export const divide =
  (amount: number = 1) =>
  <T extends number>(value: T) =>
    value / amount;
