This example show how to use `match` as a grouping function

```typescript
import { pipe, group, gte, lt, match, prop, reduce, tap } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

persons.pipe(
  reduce(
    group(
      pipe(
        prop('age'),
        match(new Map()
          .set(gte(18), () => 'Major')
          .set(lt(18), () => 'Minor')
        ),
      )
    ),
  ),
  tap(console.log)
);

/*
{
  Minor: [
    { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
    { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' }
  ],
  Major: [
    { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
    { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
    { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
    { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' }
  ]
}
*/