```typescript
import { groupBy, pipe, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

pipe(
  groupBy('sex'),
  tap(console.log)
)(persons);

/*
{
  M: [
    { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
    { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
    { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' }
  ],
  F: [
    { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
    { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
    { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' }
  ]
}
*/
```
