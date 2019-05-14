const assert = require('chai').assert
const regexp = require('C:/Users/DEEPU/Desktop/javascript/Oops/Oopsprograms/regExp.js')
describe('regular exp testing ', function () {
  it(' name is should be in string format', function () {
    let result = regexp.name
    assert.isString(result)

  })
  it('mobile number it should be in digit format ', function () {
    let result = parseInt(regexp.mobile)
    assert.isNumber(result)

  })
  it('mobile number it should be in digit format ', function () {
    let result = regexp.fullname
    assert.isString(result)

  })
})