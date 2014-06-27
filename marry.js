
function marry(state, pattern) {
  var bindings = {}

  for (key in pattern) {

    var value = pattern[key]
    if (value instanceof Variable) {
      if (state[key] !== undefined) {
        bindings[value.name] = state[key]
      } else {
        return null
      }
    } else if (value !== state[key]) {
      return null
    }
  }

  return {
    bindings: bindings
  }
}

function Variable(name) {
  if (!(this instanceof Variable)) {
    return new Variable(name);
  }

  this.name = name;
}

marry.v = Variable

// TODO handle the web
module.exports = marry
