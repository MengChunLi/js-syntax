'use strict'

const fetch = require('node-fetch');
const URL = "http://coupon.eztravel.com.tw:8080/coupon/rest/v1/getTktProd?prodNo=TKAI000001540"

function* fetchCoupon() {
  const res = yield fetch(URL)
  const json = yield res.json()
  return `${json.key} - ${json.items}`
}

function coroutine(gen) {
  const generator = gen()
  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value).then(res => handle(generator.next(res)))
  }
  return handle(generator.next())
}

const coupon = coroutine(fetchCoupon)
coupon.then(json => console.log(json))