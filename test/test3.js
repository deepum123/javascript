const assert=require('chai').assert
const bankCashCounter=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/bankCashCounter.js')
describe(' its returns the total amount ', function(){
    it(' it should be return above zero value ' ,function(){
        let result=bankCashCounter
        assert.isAbove(bankCashCounter,1)
    })
    it(' it should be return value is not a string ' ,function(){
        let result=bankCashCounter
        assert.isNotString(bankCashCounter)
    })
    it(' it should be return not null ' ,function(){
        let result=bankCashCounter
        assert.isNotNull(bankCashCounter)
    })
    it(' it should be return notNAN' ,function(){
        let result=bankCashCounter
        assert.isNotNaN(bankCashCounter)
    })
})