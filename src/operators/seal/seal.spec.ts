import { seal } from './seal';

describe('seal', () => {
  describe('PlainObject', () => {
    it('should deep seal', () => {
      const source: any = { a: 1, b: { c: 2 } };
      const operator = seal();
      const result = operator(source);

      expect(Object.isSealed(source)).toBeFalsy();
      expect(Object.isSealed(result)).toBeTruthy();
      expect(() => {
        result.a = 2;
      }).not.toThrowError();
      expect(() => {
        result.d = 2;
      }).toThrowError();
      expect(() => {
        source.d = 2;
      }).not.toThrowError();

      expect(() => {
        result.b.c = 3;
      }).not.toThrowError();
      expect(() => {
        result.b.d = 2;
      }).toThrowError();
      expect(() => {
        source.b.d = 2;
      }).not.toThrowError();
    });

    it('should not deep seal', () => {
      const source: any = { a: 1, b: { c: 2 } };
      const operator = seal(false);
      const result = operator(source);

      expect(Object.isSealed(source)).toBeFalsy();
      expect(Object.isSealed(result)).toBeTruthy();
      expect(() => {
        result.d = 2;
      }).toThrowError();
      expect(() => {
        source.d = 2;
      }).not.toThrowError();

      expect(() => {
        result.b.d = 3;
      }).not.toThrowError();
      expect(() => {
        source.b.d = 2;
      }).not.toThrowError();
    });
  });
});
