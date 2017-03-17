'use strict'

const d = new Promise((resolve, reject) => {
  // throw new Error('error1')
  setTimeout(() => {
    if (true) {
      resolve('hello world.')
    } else {
      reject('no bye!')
    }
  }, 1000)
});

d.then((data) => {
    console.log('success1: ', data)
    return data //pass data to next then()
  }, (err) => {
    console.error('\x1b[36m%s\x1b[0m', err)
  }) //第二個參數傳errorCallback
  .then((data) => {
    throw new Error('error2')
    console.log('success2: ', data)
  })
  .catch((err) => { //一般會用catch，這樣就不用在每個then都傳errorCallback
    console.error('\x1b[36m%s\x1b[0m', err)
  })