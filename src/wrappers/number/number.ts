export const number = {
  divide:
    (amount = 1) =>
    (source: number) =>
      source / amount,
  minus:
    (amount = 1) =>
    (source: number) =>
      source - amount,
  modulo:
    (amount = 1) =>
    (source: number) =>
      source % amount,
  plus:
    (amount = 1) =>
    (source: number) =>
      source + amount,
  times: (amount: number) => (source: number) => source * amount,
};
