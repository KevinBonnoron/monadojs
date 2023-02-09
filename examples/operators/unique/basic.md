This example show how to remove duplicates from an array.

```typescript
import { tap, unique } from 'monadojs';

const data = [0, 1, 2, 1, 3, 1, 4, 2, 3, 4, 5];

data.pipe(
  unique(),
  tap(console.log)
);

// [ 0, 1, 2, 3, 4, 5 ]
```
