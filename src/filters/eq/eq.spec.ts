import { eq } from './eq';

describe('eq', () => {
  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = eq('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq('b');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = eq(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq(0);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const source = true;

    it('should return true', () => {
      const operator = eq(true);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq(false);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = ['a', 'b', 'c'];

    it('should return true', () => {
      const operator = eq(['a', 'b', 'c']);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq(['c', 'b', 'a']);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Object', () => {
    const source = { a: 1, b: 2, c: 3 };

    it('should return true', () => {
      const operator = eq({ a: 1, b: 2, c: 3 });
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq({ a: 1, c: 3 });
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('null', () => {
    const source = null;

    it('should return true', () => {
      const operator = eq(null);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq({});
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const source = undefined;

    it('should return true', () => {
      const operator = eq(undefined);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = eq({});
      expect(operator(source)).toBeFalsy();
    });
  });
});
