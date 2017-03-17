'use strict'

function Store() {
  let aisle = {
    fruit: [],
    vagetable: []
  }
  return {
    add: function(category, ...items) {
      //arguments是一個array-like object, 雖然有lenght, 但不可以直接用forEach
      //In the past, with ES5 the way that we turned our array like arguments into an actual array was to use the splice call hack. 
      // const items = [].splice.call(arguments, 1);
      items.forEach((item) => {
        aisle[category].push(item)
      })
    },
    aisle: aisle
  }
}

const store = new Store();

store.add("fruit", "apple", "orange");
store.add("fruit", "apple1", "orange1");
console.log(store.aisle);