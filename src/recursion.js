// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 0 + 1 = 1; 1 + 1 = 2; 1 + 2 = 3; 2 + 3 = 5
  //
  if ((n === 0) || (n === 1)) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// console.log(nFibonacci(3));
//
// n = 2:  nFib(1) + nFib (0)
// n = 3:  nFib(2) + nFib(1) = [nFib(1) + nFib(0)] + 1
// n = 4:  nFib(3) + nFib(2) =
//
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(--n);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const result = [];
  let dupCheck = true;
  const recurse = (innerObj) => {
    Object.keys(innerObj).forEach((key) => {
      if (typeof innerObj[key] === 'object') recurse(innerObj[key]);
      else {
        result.push(innerObj[key]);
        if (innerObj[key] !== result[0]) dupCheck = false;
      }
    });
  };
  recurse(obj);
  return dupCheck;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
