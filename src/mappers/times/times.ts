export const times =
  <T extends number>(amount: number) =>
  (value: T) =>
    value * amount;
