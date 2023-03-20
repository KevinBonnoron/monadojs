import { prop } from '../../mappers';
import { group } from './group';

interface Person {
  name: string;
  age: number;
  sex: 'M' | 'F';
}

describe('group', () => {
  it('should group elements', () => {
    const laurent: Person = { name: 'Laurent', age: 12, sex: 'M' };
    const julie: Person = { name: 'Julie', age: 16, sex: 'F' };
    const aurelien: Person = { name: 'Aurelien', age: 25, sex: 'M' };
    const paul: Person = { name: 'Paul', age: 52, sex: 'M' };
    const sarah: Person = { name: 'Sarah', age: 36, sex: 'F' };
    const winston: Person = { name: 'Winston', age: 1, sex: 'M' };
    const judith: Person = { name: 'Judith', age: 40, sex: 'F' };

    const data = [laurent, julie, aurelien, paul, sarah, winston, judith];

    const expected = { M: [laurent, aurelien, paul, winston], F: [julie, sarah, judith] };
    expect(data.reduce(group('sex'), {})).toStrictEqual(expected);
    expect(
      data.reduce(
        group((value) => value.sex),
        {}
      )
    ).toStrictEqual(expected);
    expect(data.reduce(group(prop('sex')), {})).toStrictEqual(expected);
  });
});
