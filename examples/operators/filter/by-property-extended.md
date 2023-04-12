This example show how to keep products having `price` property strictly greater than 5.0 or lesser than 1.0

```typescript
import { pipe, filter, gt, lt, or, prop, tap } from 'monadojs';

const products = [
  { id: 1, label: 'Apple', price: 1.35 },
  { id: 2, label: 'Orange', price: 0.9 },
  { id: 3, label: 'Banana', price: 1.5 },
  { id: 4, label: 'Peach', price: 5.0 },
  { id: 5, label: 'Cherry', price: 6.4 },
  { id: 6, label: 'Stawberry', price: 8.6 },
];

products.pipe(filter(pipe(prop('price'), or(gt(5.0), lt(1.0)))), tap(console.log));

/*
[
  { id: 2, label: 'Orange', price: 0.9 },
  { id: 5, label: 'Cherry', price: 6.4 },
  { id: 6, label: 'Stawberry', price: 8.6 }
]
*/
```
