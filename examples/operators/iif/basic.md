```typescript
import { gt, iif, map, pipe, prop, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

const ageGreaterThan = (age: number) => pipe(prop('age'), gt(age));

pipe(
  map(
    iif(ageGreaterThan(15), prop('firstName'), prop('lastName'))
  ),
  tap(console.log)
)(persons);

// [ 'Brown', 'Robert', 'Mary', 'John', 'Patricia', 'Smith' ]
```
