This example show a basic usage of ensure. You will need to do an `if` on `params.id` before

```typescript
import { ensure } from 'monadojs';

function nextId(params: Record<string, number | undefined>) {
  const id = ensure(params.id, 0);
  return id + 1;
}

console.log(nextId({ id: 0 }));
// 1

console.log(nextId({}));
// 1
```
