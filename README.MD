# MonadoJs

This library allow developpers to do common operations on arrays and objects (eg: filtering, mapping, reducing and sorting) without really caring on what the function is applied.

The idea came when i've wanted to do sum on nested properties of object, and having to declare intermediate variables and calling popular libraries helper functions to do what i wanted.

Also i wanted to have the ability to use the functions from the library with common js functions (like filter, reducer, map...) without the need to always use the `pipe` functions like in other libraries.

# Getting started

To install just run

```bash
# npm
npm install monadojs
# yarn
yarn add monadojs
```

Then you can start using the library:

```typescript
import { prop, pipe } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

// Get "firstName" for all persons into an array
const firstNames = pipe(
  prop('firstName')
)(persons);

// Or store a mapper function and apply it later
const firstNameMapper = prop('firstName');
const firstNames = firstNameMapper(persons);

// You still can use regular map functions if needed
persons.map(prop('firstName'));

// You can even use the .pipe syntax (non recommanded)
const firstNames: string[] = persons.pipe(
  prop('firstName')
);
```

## API

### Filters

- [after](examples/filters/after/index.md)
- [before](examples/filters/before/index.md)
- empty
- endsWith
- [eq](examples/filters/eq/index.md)
- gt
- gte
- has-key
- iin
- includes
- [like](examples/filters/like/index.md)
- lt
- lte
- neq
- nil
- ofType
- startsWith

### Logical Operators

Logical operators are function that can be used in combination with `filter` operator.

- and
- nand
- nor
- not
- or
- xor

### Mapper

- capitalize
- ceil
- clone
- divide
- exclude
- floor
- lower
- math
- maybe
- minus
- modulo
- pick
- plus
- pow
- [prop](examples/mappers/prop/index.md)
- range
- replace
- round
- substring
- times
- transform
- trunc
- upper

### Operators

Operators are functions that can be applyed on both object or array.

- applySpec
- catch-error
- [combine](examples/operators/combine/index.md)
- concat
- encloseIn
- entries
- every
- [filter](examples/operators/filter/index.md)
- find
- findIndex
- freeze
- get
- groupBy
- identity
- [iif](examples/operators/iif/index.md)
- indexOf
- keys
- length
- [match](examples/operators/match/index.md)
- [map](examples/operators/map/index.md)
- merge
- [none](examples/operators/none/index.md)
- pipe
- pop
- [reduce](examples/operators/reduce/index.md)
- reverse
- seal
- shift
- shuffle
- some
- sort
- [tap](examples/operators/tap/index.md)
- throw-error
- [to](examples/operators/to/index.md)
- [unique](examples/operators/unique/index.md)
- values
- walk

### Reducers

Reducers are functions that produce a single result by iterating over the passed array.

- avg
- chunk
- first
- flatten
- head
- join
- last
- max
- median
- min
- nth
- sample
- slice
- sum
- tail
- zip

### Sorters

- asc
- desc
