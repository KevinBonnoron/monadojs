import { endsWith } from './ends-with';

describe('ends-with', () => {
  describe('string', () => {
    const source = 'abc';

    it('should return true', () => {
      const operator = endsWith('c');

      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = endsWith('a');

      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = ['abc', 'bac'];

    it('should return true', () => {
      const operator = endsWith('c');

      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = endsWith('a');

      expect(operator(source)).toBeFalsy();
    });
  });
});
