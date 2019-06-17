const uniqueRandomArray = require('unique-random-array')
const names = require('./names')
const getRandomItem = uniqueRandomArray(names)

function random(number) {
  if (number === undefined) {
    return getRandomItem()
  }
  const randomItems = []
  for(let i = 0; i < number; i++) {
    randomItems.push(getRandomItem())
  }
  return randomItems
}

module.exports = {
  all: names,
  random,
}
