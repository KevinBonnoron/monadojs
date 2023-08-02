This example show how to filter object having firstName with value 'James'.

```typescript
import { eq, filter, pipe, prop, tap } from from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

pipe(
  filter(
    pipe(prop('firstName'), eq('James'))
  ),
  tap(console.log)
)(persons);

/*
  [
    { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' }
  ]
*/
```
