Marry
=====

Unification for JS: extract variables from your JS objects.

```js

var marry = require('marry')
  , object = {
        long: {
            object: 42
        }
      , answer: 42
      , something: 'else'
      , beep: 'bop'
    }
  , pattern = {
        long: {
            object: marry.v('long')
        }
      , answer: marry.v('answer')
      , something: 'else'
    }

console.log('first, basic marrying')
console.log(marry({
    long: {
        object: 42
    }
  , answer: 42
  , something: 'else'
  , beep: 'bop'
}, {
    long: {
        object: marry.v('long')
    }
  , answer: marry.v('answer')
  , something: 'else'
}))
// outputs
// { bindings: { long: 42, answer: 42 },
//   marriage: { long: { object: 42 }, answer: 42, something: 'else' },
//   equalVariables: {} }

console.log('second, variables marrying')
console.log(marry({
    another: marry.v('another')
  , answer: 42
  , something: 'else'
  , beep: 'bop'
}, {
    another: marry.v('var')
  , answer: marry.v('answer')
  , something: 'else'
}))
// outputs
// { bindings: { answer: 42 },
//   marriage: { another: { name: 'var' }, answer: 42, something: 'else' },
//   equalVariables: { var: [ 'another' ], another: [ 'var' ] } }
```

License
-------

MIT
