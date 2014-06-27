/* Copyright (c) 2014 Matteo Collina
 * MIT
 * <https://github.com/mcollina/marry.js/blob/master/LICENSE>
 */

function marry(state, pattern, result) {
  result = result || new Result()

  for (key in pattern) {

    if (pattern[key] instanceof Variable) {
      if (state[key] instanceof Variable) {
        result.marriage[key] = pattern[key]
        equalVariables(result.equalVariables, pattern[key].name, state[key].name)
      } else if (state[key] !== undefined) {
        if (result.bindings[pattern[key].name] && result.bindings[pattern[key].name] !== state[key]) {
          return null
        }
        result.bindings[pattern[key].name] = state[key]
        result.marriage[key] = state[key]
      } else {
        return null
      }
    } else if (typeof pattern[key] === 'object' && typeof state[key] === 'object') {
      marry(state[key], pattern[key], result.stack(key))
    } else if (pattern[key] !== state[key]) {
      return null
    } else {
      result.marriage[key] = state[key]
    }
  }

  return result
}

function equalVariables(obj, a, b) {
  if (!obj[a]) {
    obj[a] = []
  }
  obj[a].push(b)

  if (!obj[b]) {
    obj[b] = []
  }
  obj[b].push(a)
}

function Variable(name) {
  if (!(this instanceof Variable)) {
    return new Variable(name);
  }

  this.name = name;
}

function Result() {
  this.bindings = {}
  this.marriage = {}
  this.equalVariables = {}
}

Result.prototype.stack = function(key) {
  var stacked = Object.create(this)
  this.marriage[key] = {}
  stacked.marriage = this.marriage[key]

  return stacked
}

marry.v = Variable

// TODO handle the web
module.exports = marry
