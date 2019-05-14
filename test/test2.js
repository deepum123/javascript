const assert= require('chai').assert;
const balancedParentheses=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/balancedParentheses')
describe(' its return boolean value ',function(){
    it('it should be return true or false', function(){
        let result=balancedParentheses
        assert.isBoolean(result)
    })
    it('it should be return not NaN value', function(){
        let result=balancedParentheses
        assert.isNotNaN(result)
    })
    it('it should be return not string', function(){
        let result=balancedParentheses
        assert.isNotString(result)
    })
    it('it should be return not number value', function(){
        let result=balancedParentheses
        assert.isNotNumber(result)
    })
})