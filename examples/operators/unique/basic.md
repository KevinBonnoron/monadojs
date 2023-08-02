This example show how to remove duplicates from an array.

```typescript
import { pipe, tap, unique } from 'monadojs';

const data = [0, 1, 2, 1, 3, 1, 4, 2, 3, 4, 5];

pipe(
  unique(),
  tap(console.log)
)(data);

// [ 0, 1, 2, 3, 4, 5 ]
```
