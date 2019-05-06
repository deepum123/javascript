var note=[2000,500,200,100,50,20,10,5,1]
var count=[0,0,0,0,0,0,0,0]
var utility=require('../Utility/new')
const readline=require('readline-sync')
var amout=readline.question('enter the amout')
utility.machine(note,count,amout)
