import { before, filter, pipe, prop, tap } from './index';

describe('test', () => {
  it('should work', () => {
    interface Person {
      id: number;
      firstName: string;
      lastName: string;
      birthDate: Date;
      sex: 'F' | 'M';
    }

    const persons: Person[] = [
      { id: 1, firstName: 'James', lastName: 'Brown', birthDate: new Date('2010-06-15'), sex: 'M' },
      { id: 2, firstName: 'Robert', lastName: 'Jones', birthDate: new Date('1986-03-20'), sex: 'M' },
      { id: 3, firstName: 'Mary', lastName: 'Williams', birthDate: new Date('1990-10-20'), sex: 'F' },
      { id: 4, firstName: 'John', lastName: 'David', birthDate: new Date('1982-01-25'), sex: 'M' },
      { id: 5, firstName: 'Patricia', lastName: 'Brown', birthDate: new Date('2000-01-01'), sex: 'F' },
      { id: 6, firstName: 'Jennifer', lastName: 'Smith', birthDate: new Date('2020-09-08'), sex: 'F' },
    ];

    persons.pipe(filter(pipe(prop('birthDate'), before(new Date('1990-01-01')))), tap(console.log));
  });
});
