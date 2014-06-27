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

console.log(marry(object, pattern))
// outputs
// { bindings: { long: 42, answer: 42 } }
```

License
-------

MIT
