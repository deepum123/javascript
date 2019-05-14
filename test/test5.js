const assert = require('chai').assert
const primeanagram = require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/primeAnagram')
describe(' it should return the array ', function () {
    it(' it returns the array ', function () {
        let result = primeanagram
        assert.isArray(result)
    })
    it(' array not empty array ', function () {
        let result = primeanagram
        assert.isNotEmpty(result)
    })
        it(' it returns value is not boolean ', function () {
            let result = primeanagram
            assert.isNotBoolean(result)
        })
            it(' it returns the not null ', function () {
                let result = primeanagram
                assert.isNotNull(result)

            })
        })
