const expect = require('chai').expect
const names = require('.')

describe('chinese-martial-art-names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(names.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string'
        })
      }
    })

    it('should contain `张无忌`', function () {
      expect(names.all).to.include('张无忌')
    })
  })

  describe('random', function () {
    it('should return a random item from the all', function () {
      const randomItem = names.random()
      expect(names.all).to.include(randomItem)
    })

    it('should return an array of random items if passed a number', function () {
      const randomItems = names.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(function (item) {
        expect(names.all).to.include(item)
      })
    })
  })
})
