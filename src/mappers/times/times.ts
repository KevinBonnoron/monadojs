export const times =
  (amount: number) =>
  <T extends number>(source: T) =>
    source * amount;
