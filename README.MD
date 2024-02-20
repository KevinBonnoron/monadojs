# MonadoJs

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Utility library for manipulating array, set, map & plain objects (à la lodash). Available in nodejs & in the browser.
Contains also some utilities.

# Getting started

To install just run

```bash
# npm
npm i monadojs
# yarn
yarn add monadojs
```

Then you can start using the library:

```typescript
import { createFilterFn, filter, map, pipe, prop } from 'monadojs';

const persons = [
  { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
  { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
  { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
  { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
  { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
  { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' },
];

// Get "firstName" for all persons into an array
const firstNameMapper = map(
  prop('firstName')
);
const firstNames = firstNameMapper(persons);

// Filter peoples which are older than 20
const firstNames = pipe(
  filter({ age: { $gt: 20 } }),
  map(
    prop('firstName')
  )
)(persons);

// You can create operator for later use
const ageGreaterThan = (age: number) => createFilterFn({ age: { $gt: age } });
const getFirstName = prop('firstName');
const firstNames2 = pipe(
  filter(ageGreaterThan(20)),
  map(getFirstName)
)(persons);

// You still can use regular array functions if needed
const firstNames3 = persons.filter(ageGreaterThan(20)).map(getFirstName);
```

There are some examples provided [here](./examples/index.md)


# API

## Filters

- [after](examples/filters/after/index.md)
- [before](examples/filters/before/index.md)
- empty
- endsWith
- [eq](examples/filters/eq/index.md)
- gt
- gte
- has
- iin
- includes
- is
- [like](examples/filters/like/index.md)
- lt
- lte
- neq

## Logicals

Logical operators are function that can be used in combination with `filter` operator.

- and
- nand
- nor
- not
- or
- xor

## Mappers

- capitalize
- exclude
- lower
- mapRange
- [math](examples/mappers/math/index.md)
- pick
- [prop](examples/mappers/prop/index.md)
- replace
- substring
- transform
- upper

## Operators

Operators are functions that can be applyed on both object or array.

- applySpec
- catch-error
- clone
- [combine](examples/operators/combine/index.md)
- concat
- difference
- encloseIn
- entries
- every
- [filter](examples/operators/filter/index.md)
- find
- findIndex
- freeze
- get
- [groupBy](examples/operators/group-by/index.md)
- identity
- [iif](examples/operators/iif/index.md)
- indexOf
- keys
- length
- [map](examples/operators/map/index.md)
- [match](examples/operators/match/index.md)
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

## Reducers

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

## Sorters

- asc
- desc

## Utils

- [builder](examples/utils/builder/index.md)
- [coalesce](examples/utils/coalesce/index.md)
- [ensure](examples/utils/ensure/index.md)
