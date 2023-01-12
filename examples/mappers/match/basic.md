This example show how to convert an array of person to a single string with

```typescript
import { map, match, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

persons.pipe(
  map(
    match(new Map([
      [(value: any) => value.sex === 'M', (value: any) => `Mr ${value.firstName} ${value.lastName}`],
      [(value: any) => value.sex === 'F' && value.age < 18, (value: any) => `Miss ${value.firstName} ${value.lastName}`],
      [(value: any) => value.sex === 'F', (value: any) => `Mrs ${value.firstName} ${value.lastName}`],
    ]))
  ),
  tap(console.log)
);
/*
[
  'Mr James Brown',
  'Mr Robert Jones',
  'Mrs Mary Williams',
  'Mr John David',
  'Mrs Patricia Brown',
  'Miss Jennifer Smith'
]
*/
```