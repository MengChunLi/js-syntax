var luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
}

var han = {
  name: "han solo",
  jedi: false,
  parents: {
    mother: {
      jedi: false
    }
  }
}

var anakin = {
  name: "anakin skywalker",
  jedi: true
}

var characters = [luke, han, anakin];

//一層一層下去找object field存不存在，沒有一律回傳false，避免 Cannot read property 'jedi' of undefined error
function isFatherJedi(item) {
  const path = 'parents.father.jedi';
  return path.split('.').reduce(function(obj, field) {
    if (obj) {
      return obj[field]
    }
    return false
  }, item)
}

characters.forEach(function(item) {
  console.log(isFatherJedi(item));
})