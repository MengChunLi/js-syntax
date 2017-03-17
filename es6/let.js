'use strict'

let fs = []

// Again, this function here,
// which is being passed in through our forEach is simply this function storing our i. 
// You'd think that we'd get zero through 9, 
// but in fact when we run this we'll get 10's,
// because this i is that same i being used and reassigned each time.

// If I use let instead of var now, and rerun this, 
// you'll see that I get zero through 9, and it stops before getting to 10,
// because this is creating a new i each time you go through the for loop.

function call() {
  // var i;
  for (let i = 0; i < 10; i++) {
    // if use 'var' then i will always be 10
    // because 'var' don't create new one on each time to go for loop, but 'let' will.
    console.log(i);
    fs.push(function() {
      console.log('log:', i)
    })
  }

  fs.forEach(function(f) {
    f()
  })
}

function log(i) {
  return function() {
    console.log('log:', i)
  }
}

call()