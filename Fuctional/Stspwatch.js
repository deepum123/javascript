var  utility=require('../Utility/new')
const readline=require('readline-sync')
readline.question('enter  the any keys to start the date')
var start=Date.now()
 
 console.log(start+' miliseconds')
 readline.question('enter  the any keys to start the date')
 var stop=Date.now();
 console.log(stop+' milliseconds')
var diff=utility.watch(start,stop)
console.log('difference is '+  diff  +'miliseconds')