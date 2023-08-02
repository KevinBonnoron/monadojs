This example show how to use `match` to convert an array of person into an array of string depending of gender.

```typescript
import { eq, lt, match, pipe, prop, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

pipe(
  match([
    { if: pipe(prop('sex'), eq('M')), then: (value: any) => `Mr ${value.firstName} ${value.lastName}` },
    { if: pipe(prop('age'), lt(18)), then: (value: any) => `Miss ${value.firstName} ${value.lastName}` },
    { then: (value: any) => `Mrs ${value.firstName} ${value.lastName}` },
  ]),
  tap(console.log)
)(persons);
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
