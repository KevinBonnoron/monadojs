export const tap =
  (fn: Function) =>
  <T>(values: T) => {
    fn(values);
    return values;
  };
