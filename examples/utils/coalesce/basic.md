This example show a basic usage of coalesce function.

```typescript
import { coalesce } from 'monadojs';

console.log(coalesce(null, undefined, {}, [], 1));
// {}
```
