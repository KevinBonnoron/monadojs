```typescript
import { groupBy, tap } from './index';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

persons.pipe(
  groupBy((person) => person.age >= 18 ? 'Major' : 'Minor'),
  tap(console.log)
);

/*
{
  Minor: [
    { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
    {
      id: 6,
      firstName: 'Jennifer',
      lastName: 'Smith',
      age: 7,
      sex: 'F'
    }
  ],
  Major: [
    {
      id: 2,
      firstName: 'Robert',
      lastName: 'Jones',
      age: 30,
      sex: 'M'
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Williams',
      age: 19,
      sex: 'F'
    },
    { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
    {
      id: 5,
      firstName: 'Patricia',
      lastName: 'Brown',
      age: 52,
      sex: 'F'
    }
  ]
}
*/
```