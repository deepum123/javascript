var utility=require('../Utility/new')
const readline=require('readline-sync')
var temp=readline.question('enter the value of temparature( is this less the 50 )= ')
var speed=readline.question('enter the value of speed  (range between 3 to 120) = ')
utility.windchill(temp,speed)