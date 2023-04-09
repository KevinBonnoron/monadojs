import { groupBy } from './group-by';

interface Person {
  name: string;
  age: number;
  sex: 'M' | 'F';
}

describe('groupBy', () => {
  const laurent: Person = { name: 'Laurent', age: 12, sex: 'M' };
  const julie: Person = { name: 'Julie', age: 16, sex: 'F' };
  const aurelien: Person = { name: 'Aurelien', age: 25, sex: 'M' };
  const paul: Person = { name: 'Paul', age: 52, sex: 'M' };
  const sarah: Person = { name: 'Sarah', age: 36, sex: 'F' };
  const winston: Person = { name: 'Winston', age: 1, sex: 'M' };
  const judith: Person = { name: 'Judith', age: 40, sex: 'F' };

  describe('Array', () => {
    const source = [laurent, julie, aurelien, paul, sarah, winston, judith];

    it('should group by property', () => {
      const operator = groupBy('sex');
      const expected = { M: [laurent, aurelien, paul, winston], F: [julie, sarah, judith] };

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should group by operator', () => {
      const operator = groupBy((person) => person.sex);
      const expected = { M: [laurent, aurelien, paul, winston], F: [julie, sarah, judith] };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
