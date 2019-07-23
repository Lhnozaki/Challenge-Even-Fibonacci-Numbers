/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 0;

  // do your work here

  let num1 = 0;
  let num2 = 1;
  let nextNum = 0;

  while (nextNum <= maxFibValue) {
    nextNum = num1 + num2;

    // Summation of even fib numbers
    if (nextNum % 2 === 0) {
      sum += nextNum;
    }

    num1 = num2;
    num2 = nextNum;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;

  //define your base case, validate your input

  //do your work here;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
