const assert=require('chai').assert
const anagramreverse=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/anagramReverse')
describe(' it should return the array ',function(){
    it(' it returns the array ',function(){
        let result=anagramreverse
        assert.isArray(result)
    })
    it('  return a not nan',function(){
        let result=anagramreverse
        assert.isNotNaN(result)
    })
    it(' array is not empty ',function(){
        let result=anagramreverse
        assert.isNotEmpty(result)
    })
    it(' return value is not boolean ',function(){
        let result=anagramreverse
        assert.isNotBoolean(result)
    })
})