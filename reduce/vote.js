'use strict'

var votes = [
  "angular",
  "react",
  "react",
  "react",
  "vanilla",
  "react",
  "angular",
  "angular",
  "angular",
  "vanilla"
]

function reducer(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var initTally = {};

var results = votes.reduce(reducer, initTally);
console.log(results);