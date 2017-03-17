var stks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]

Array.prototype.filter2 = function(expection) {
  var results = [];
  this.forEach(function(item) {
    if (expection(item)) {
      results.push(item)
    }
  })
  return results;
}

var expensiveStocks = getStocksOver(stks,
  150.00);

function getStocksOver(stocks, minPrice) {
  return stocks.filter2(function(item) {
    return item.price > minPrice
  })
}

console.log(expensiveStocks)

Array.prototype.map2 = function(projection) {
  var results = []
  this.forEach(function(item) {
    results.push(projection(item))
  })
  return results;
}

var symbols = stks.map2(function(item) {
  return item.symbol;
})

console.log(symbols)