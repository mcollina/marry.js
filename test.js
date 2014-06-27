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
  t.deepEqual(result.marriage, { hello: 42 }, 'should create the marriage')
  t.end()
})

test('simple object with values', function(t) {
  var result = marry({
    hello: 42
  }, {
    hello: 42
  })

  t.ok(result, 'should marry')
  t.deepEqual(result.marriage, { hello: 42 }, 'should create the marriage')
  t.end()
})

test('marry objects', function(t) {
  var result = marry({
    hello: { value: 42 }
  }, {
    hello: marry.v('x')
  })

  t.ok(result, 'should marry')
  t.deepEqual(result.bindings, { x: { value: 42 } }, 'should create the binding')
  t.deepEqual(result.marriage, { hello: { value: 42 } }, 'should create the marriage')
  t.end()
})

test('marry inside objects', function(t) {
  var result = marry({
    hello: { value: 42 }
  }, {
    hello: { value: marry.v('x') }
  })

  t.ok(result, 'should marry')
  t.deepEqual(result.bindings, { x: 42 }, 'should create the binding')
  t.deepEqual(result.marriage, { hello: { value: 42 } }, 'should create the marriage')
  t.end()
})

test('marry variables', function(t) {
  var result = marry({
    hello: { value: marry.v('y') }
  }, {
    hello: { value: marry.v('x') }
  })

  t.ok(result, 'should marry')
  t.deepEqual(result.bindings, { }, 'should bind nothing')
  t.deepEqual(result.marriage, { hello: { value: marry.v('x') } }, 'should return a marriage')
  t.deepEqual(result.equalVariables, { 'x': 'y', 'y': 'x' }, 'should set variables as equals')
  t.end()
})
