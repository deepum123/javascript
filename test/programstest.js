/*const assert= require('chai').assert;
const binary=require('../Algorithms/binarysearch1').binary
describe('binarysearch1',function(){
    it('binary should return the number', function(){
        let result=binary
        assert.notTypeOf(result,'String')
    });
    });
  
    /*
ert=require('chai').assert
const unorderlist=require('dataStructuree/dataStrucrurePrograms/unOrderlist')
describe('unorderlist', function(){
 it('unorderlist must return the string array', function()
 {
     assert.include(unorderlist(),'String')
 })



})/*
const assert= require('chai').assert;
const leapyear=require('../Fuctional/leapyear')
describe(' its return boolean value ',function(){
    it('it should be return true or false', function(){
        let result=leapyear
        assert.isTrue(result)




    })
})/
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
  /*
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
/*
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

/
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
})/

const assert=require('chai').assert
const unorderlist=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/unOrderlist')
describe(' it should return the some values ',function(){
    it(' file contains some values ',function(){
       let result= unorderlist;
        assert.isNotEmpty(result);
    });
    it(' return value is not nan ',function(){
        let result= unorderlist;
         assert.isNotNaN(result);
     });
     it(' return value is not a number ',function(){
        let result= unorderlist;
         assert.isNotNumber(result==0);
     });
     it(' return value is not string ',function(){
        let result= unorderlist;
         assert.isNotString(result==0);
     });
}); 

*/
const assert=require('chai').assert
const orderlist=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/Orderedlist')
describe(' it should return the some values ',function(){
    it(' file contains some values ',function(){
       let result= orderlist;
        assert.isNotEmpty(result);

    });
    it(' return value is not nun ',function(){
        let result= orderlist;
         assert.isNotNaN(result==0);})

     it(' return value is not null ',function(){
            let result= orderlist;
             assert.isNotNull(result==0);})

     it(' return value is not a number',function(){
                let result= orderlist;
                 assert.isNotNumber(result==0);
     })
}); 