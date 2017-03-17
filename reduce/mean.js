'use strict'

function reducer(acc, val, index, array) {
  let tempValue = acc + val;
  if (index === array.length - 1) {
    return tempValue / array.length;
  }
  return tempValue;
}

const nums = [1, 2, 3, 4, 2, 7, 7, 8, 9];

const mean = nums.reduce(reducer, 0);

console.log(mean);