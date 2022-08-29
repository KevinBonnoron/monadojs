import { group } from './group';

describe('group', () => {
  it('should group elements', () => {
    const laurent = { name: 'Laurent', age: 12, sex: 'M' };
    const julie = { name: 'Julie', age: 16, sex: 'F' };
    const aurelien = { name: 'Aurelien', age: 25, sex: 'M' };
    const paul = { name: 'Paul', age: 52, sex: 'M' };
    const sarah = { name: 'Sarah', age: 36, sex: 'F' };
    const winston = { name: 'Winston', age: 1, sex: 'M' };
    const judith = { name: 'Judith', age: 40, sex: 'F' };

    const data = [laurent, julie, aurelien, paul, sarah, winston, judith];

    const expected = { M: [laurent, aurelien, paul, winston], F: [julie, sarah, judith] };
    expect(data.reduce(group('sex'))).toStrictEqual(expected);
    expect(data.reduce(group((value) => value.sex))).toStrictEqual(expected);
  });
});
