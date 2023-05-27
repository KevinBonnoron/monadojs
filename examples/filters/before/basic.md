```typescript
import { before, filter, pipe, prop, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', birthDate: new Date('2020-01-01'), sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', birthDate: new Date('2020-12-31'), sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', birthDate: new Date('2021-01-01'), sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', birthDate: new Date('2021-12-31'), sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', birthDate: new Date('2022-01-01'), sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', birthDate: new Date('2022-12-31'), sex: 'F' },
];

pipe(
  filter(
    pipe(
      prop('birthDate'),
      before(new Date('2022-01-01')),
    ),
  ),
  tap(console.log)
)(persons);

/*
  [
    {
      id: 1,
      firstName: 'James',
      lastName: 'Brown',
      birthDate: 2020-01-01T00:00:00.000Z,
      sex: 'M'
    },
    {
      id: 2,
      firstName: 'Robert',
      lastName: 'Jones',
      birthDate: 2020-12-31T00:00:00.000Z,
      sex: 'M'
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Williams',
      birthDate: 2021-01-01T00:00:00.000Z,
      sex: 'F'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'David',
      birthDate: 2021-12-31T00:00:00.000Z,
      sex: 'M'
    }
  ]
*/