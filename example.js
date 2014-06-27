var marry = require('./marry')

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
