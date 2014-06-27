
function marry(state, pattern, result) {
  result = result || new Result()

  for (key in pattern) {

    var value = pattern[key]
    if (value instanceof Variable) {
      if (state[key] !== undefined) {
        result.bindings[value.name] = state[key]
      } else {
        return null
      }
    } else if (typeof value === 'object' && typeof state[key] === 'object') {
      marry(state[key], value, result)
    } else if (value !== state[key]) {
      return null
    }
  }

  return result
}

function Variable(name) {
  if (!(this instanceof Variable)) {
    return new Variable(name);
  }

  this.name = name;
}

function Result() {
  this.bindings = {}
}

marry.v = Variable

// TODO handle the web
module.exports = marry
