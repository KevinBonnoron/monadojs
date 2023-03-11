export const modulo =
  (amount: number = 1) =>
  <S extends number>(source: S) =>
    source % amount;
