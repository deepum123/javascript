const assert=require('chai').assert
const primeArray=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/primeNumberr.js')
describe(' it should return the array ',function(){
    it(' it returns the array ',function(){
        let result=primeArray
        assert.isArray(primeArray)
    })

    it(' array is not empty ',function(){
        let result=primeArray
        assert.isNotEmpty(primeArray )
    })

    it(' array values are not nan ',function(){
        let result=primeArray
        assert.isNotNaN(primeArray )
    })
   
    it(' array is not null ',function(){
        let result=primeArray
        assert.isNotNull(primeArray )
})
})