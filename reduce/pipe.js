function increment(val) {
  return val + 1;
}

function decrement(val) {
  return val - 1;
}

function mod5(val) {
  return val % 5;
}

function double(val) {
  return val * 2;
}

const initValue = 1;


const pipe = [increment, decrement, mod5, double, double, mod5];
console.time('pipe');
const result = pipe.reduce((acc, fn) => fn(acc), initValue);
console.log(result);
console.timeEnd('pipe');

const resultR = pipe.reduceRight((acc, fn) => fn(acc), initValue);
console.log(resultR);


function pipeline(initValue, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), initValue);
}
console.time('pipeline');
const res = pipeline(initValue, increment, decrement, mod5, double, double, mod5);
console.log(res);
console.timeEnd('pipeline');