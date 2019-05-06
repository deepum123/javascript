var utility=require('../Utility/new')
const readline=require('readline-sync')
 var y=readline.question('enter the year')
 
 var reult= utility.leapyear(y)
 module.exports=reult;
