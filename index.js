// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(par="*") {
  return function(adjective="special") {
    return `You are ${par}${adjective}${par}!`
  }
}

let Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a/b
  }
}

let actionApplyer = function(start, ray) {
  let s = start
  for (let i = 0; i < ray.length; i++) {
    s = ray[i](s)
  }
  return s
}