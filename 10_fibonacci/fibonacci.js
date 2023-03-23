 function fibonacci(number) {
  if (number > 0) {
    if (number < 3) return 1;
    return fibonacci(number-1) + fibonacci(number-2)
  }
  else {
    return "OOPS"
  }

};

// Do not edit below this line
module.exports = fibonacci;
