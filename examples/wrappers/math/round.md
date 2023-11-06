```typescript
import { map, math, pipe, tap } from 'monadojs';

const values = [0.004, -0.09, 10, 'a'];

pipe(
  map(math.round(1)),
  tap(console.log)
)(values);

// [ 0, -0.1, 10, NaN ]
```
