# MonadoJs

This library allow developper to do some common operations on array and objects (filtering, mapping, reducing and sorting).
The idea came when i've wanted to do sum on nested properties of object, and having to declare intermediate variables and calling popular libraries helper functions to do what i wanted. Also i wanted to have the ability to use functions with common js functions (like filter, reducer, map...).

By searching i didn't find any libraries doing operations on both data structure, so i implemented this one.

# Getting started
To install just run
```bash
# npm
npm install monadojs
# yarn
yarn add monadojs
```

## API
### Logical Operators
- and
- nand
- nor
- not
- or
- xor

### Mapper
- capitalize
- ceil
- floor
- keys
- lower
- [match-with](examples/matchWith/index.md)
- pow
- replace
- round
- substring
- upper
- values

### Operators
- [combine](examples/combine/index.md)
- compose
- every
- [filter](examples/filter/index.md)
- find
- identity
- [iif](examples/iif/index.md)
- length
- [map](examples/map/index.md)
- merge
- [none](examples/none/index.md)
- [reduce](examples/reduce/index.md)
- shuffle
- some
- sort
- tap

### Projections
- exclude
- pick
- [prop](examples/prop/index.md)
- props

### Reducers
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
- reverse
- sample
- slice
- sum
- tail
- tails
- unique
- zip

### Sorters
- asc
- desc
