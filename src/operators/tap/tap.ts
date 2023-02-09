export const tap =
  (fn: Function) =>
  <T>(source: T) => {
    fn(source);
    return source;
  };
