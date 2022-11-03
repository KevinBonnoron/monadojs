# MonadoJs

This library allow developper to do some common operations on array and objects (filtering, mapping, reducing and sorting).
The idea came when i've wanted to do sum on nested properties of object, and having to declare intermediate variables and calling popular libraries helper functions to do what i wanted. Also i wanted to have the ability to use the functions from the library with common js functions (like filter, reducer, map...) without the need to always use the `pipe` functions like in other libraries.

# Getting started
To install just run
```bash
# npm
npm install monadojs
# yarn
yarn add monadojs
```

## API
### Filters
- empty
- endsWith
- eq
- gt
- gte
- includes
- lt
- lte
- match
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
- add
- capitalize
- ceil
- entries
- floor
- keys
- lower
- [match-with](examples/mappers/matchWith/index.md)
- pow
- replace
- round
- sub
- substring
- times
- transform
- upper
- values

### Operators
Operators are functions that can be applyed on both object or array.

- applySpec
- [combine](examples/operators/combine/index.md)
- concat
- encloseIn
- every
- [filter](examples/operators/filter/index.md)
- find
- identity
- [iif](examples/operators/iif/index.md)
- length
- [map](examples/operators/map/index.md)
- merge
- [none](examples/operators/none/index.md)
- [reduce](examples/operators/reduce/index.md)
- reverse
- shuffle
- some
- sort
- tap

### Projections
Projections are a combination of operator and mapper at the same time. It can handle arrays or object at the same time and produce a value.

- exclude
- pick
- [prop](examples/projections/prop/index.md)
- props

### Reducers
Reducers are function that produce a single result by iterating over the passed array.

- avg
- chunk
- flatten
- group
- head
- heads
- join
- max
- min
- nth
- sample
- slice
- sum
- tail
- tails
- unique
- zip

### Sorters
- asFirst
- asLast
- asc
- desc
