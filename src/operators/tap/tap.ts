export const tap =
  <T>(fn: (values: T) => void) =>
  (values: T) => {
    fn(values);
    return values;
  };
