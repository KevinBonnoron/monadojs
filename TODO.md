# Filters
Ensure every .spec.ts files have the same pattern (gt is a good example).
- [ ] empty
- [ ] ends-with
- [ ] eq
- [x] gt
- [x] gte
- [ ] has-key
- [ ] iin
- [ ] includes
- [ ] like
- [x] lt
- [x] lte
- [ ] neq
- [ ] nil
- [ ] of-type
- [ ] starts-with

# Operators
All operators should handle Map & Set as `source`.

- [ ] apply-spec
- [x] catch-error (not affected)
- [ ] combine
- [ ] concat
- [x] enclose-in
- [x] entries
- [ ] every
- [x] filter
- [ ] find
- [ ] find-index
- [ ] identity
- [ ] iif
- [ ] index-of
- [ ] keys
- [ ] map
- [ ] merge
- [ ] none
- [ ] one
- [ ] pipe
- [x] pop
- [x] reduce
- [ ] reverse
- [x] shift
- [x] shuffle (not affected)
- [ ] some
- [x] sort (not affected)
- [x] tap
- [x] throw-error (not affected)
- [ ] unique
- [x] values
- [ ] walk

# Global
Every file must have a matching ".spec.ts" file.