const assert=require('chai').assert

const unorderlist=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/unOrderlist')
describe(' it should return the some values ',function(){
    it(' file contains some values ',function(){
       let result= unorderlist.output;
        assert.isNotEmpty(result);
    });
    it(' return value is not nan ',function(){
        let result= unorderlist.output;
         assert.isNotNaN(result);
     });
     it(' return value is not a number ',function(){
        let result= unorderlist.b;
         assert.isNotNumber(result);
     });
     it(' return value is not string ',function(){
        let result= unorderlist.b;
         assert.isNotString(result);
     });
}); 