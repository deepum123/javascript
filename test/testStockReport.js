const assert=require('chai').assert
let st=require('C:/Users/DEEPU/Desktop/javascript/Oops/Oopsprograms/stockReport.js')
var fs=require('fs')
let jsonn=fs.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/stockReport.json')
let jsss=JSON.parse(jsonn)
describe('stock report testing ',function(){
    it('numberof shares should be in numbers',function(){

     var i=0
     let result=jsss.stock[i].StockNames
        assert.typeOf(result,'string')
        
        })
        it('numberof shares should be in numbers',function(){

            var i=0
            let result=parseInt( jsss.stock[i].NumberofShare)
               assert.isNumber(result)
               
               })
               it('numberof shares should be in numbers',function(){

                var i=0
                let result=parseInt( jsss.stock[i].SharePrice)
                   assert.isNumber(result)
                   
                   })
       




})