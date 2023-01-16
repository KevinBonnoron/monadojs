export const tap =
  (fn: Function) =>
  <T>(value: T) => {
    fn(value);
    return value;
  };
