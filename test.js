var test  = require('tap').test
  , marry = require('./marry')

test('no marrying', function(t) {
  var result = marry({
    answer: 42
  }, {
    hello: marry.v('x')
  })

  t.notOk(result, 'should not marry')
  t.end()
})

test('simple object', function(t) {
  var result = marry({
    hello: 42
  }, {
    hello: marry.v('x')
  })

  t.ok(result, 'should marry')
  t.deepEqual(result.bindings, { x: 42 }, 'should create the binding')
  t.end()
})

test('simple object with values', function(t) {
  var result = marry({
    hello: 42
  }, {
    hello: 42
  })

  t.ok(result, 'should marry')
  t.end()
})
