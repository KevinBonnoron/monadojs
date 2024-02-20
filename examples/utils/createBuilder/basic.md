This example show a basic usage of builder function.

```typescript
import { builder } from 'monadojs';

interface Person {
  id: number;
  name: string;
  birthDate: Date;
  sex: 'M' | 'F';
}

const personBuilder = builder<Person>()
  .id(1)
  .name('Foo')
  .birthDate(new Date())
  .sex('M');

console.log(personBuilder());
/*
{
  id: 1,
  name: 'Foo',
  birthDate: 2020-01-01T00:00:00.000Z,
  sex: 'M'
}
*/

console.log(personBuilder({ name: 'Bar' }));
/*
{
  id: 1,
  name: 'Bar',
  birthDate: 2020-01-01T00:00:00.000Z,
  sex: 'M'
}
*/
```
