const uniqueRandomArray = require('unique-random-array')
const names = require('./names')

module.exports = {
  all: names,
  random: uniqueRandomArray(names),
}
