const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
}


const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
}

const power = function(a, b) {
  return Math.pow(a, b)
	
};

const factorial = function(num) {
  let total = 1
  if (num => 1) {
    for (let i = 1; i <= num; i++) {
      total *= i
    }
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
