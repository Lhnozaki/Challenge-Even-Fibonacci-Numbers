/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;

  // do your work here

  let fibSeq = [0, 1];

  let newArr = [];

  let evenArr = [];

  for(i = 0; i < maxFibValue; i++) {
    fibSeq.push(fibSeq[i] + fibSeq[i + 1]);
  }

  fibSeq.forEach(function(e) {
    if(e <= maxFibValue) {
      newArr.push(e);
    }
  })

  newArr.forEach(function(e) {
    if(e % 2 === 0) {
      evenArr.push(e);
    }
  })

  evenArr.forEach(function(e) {
    sum += e;
  })

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  let highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
