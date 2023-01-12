import { asc, desc, map, pick, sort, tap } from './index';

describe('test', () => {
  it('should run test', () => {
    const persons = [
      { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: null },
      { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
      { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
      { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
      { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
      { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: null, sex: 'F' },
    ];

    persons.pipe(sort(asc('sex', { nullsAs: 'first' }), desc('age', { nullsAs: 'first' })), map(pick('age', 'sex')), tap(console.log));
  });
});
