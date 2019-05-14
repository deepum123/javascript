const assert=require('chai').assert
let add=require('C:/Users/DEEPU/Desktop/javascript/Oops/Oopsprograms/adressbook')
var fs=require('fs')
let jsonn=fs.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/address.json')
let jsss=JSON.parse(jsonn)
describe('addressbook testing testing ',function(){
    it('first name should be in string',function(){

     
     let result=jsss[0].firstname
        assert.typeOf(result,'string')
        
        })
        it('idno should be in number format',function(){

          var i=0
          let result=parseInt( jsss[0].idno)
             assert.isNumber(result)
             
             })
             it('state should be in string',function(){

               var i=0
               
               let result=jsss[i].address[0].state
               assert.typeOf(result,'string')
                  
                  })
                  it('zip shouls be in number format',function(){

                     var i=0
                     let result=parseInt( jsss[0].address[0].zip)
                        assert.isNumber(result)
                        
                        })




})