var utility=require('../Utility/new')
const read=require('readline-sync')
var r=read.question('enter the rows number')
var c=read.question('enter the colomn number')
var arr=[]
var k;
var l;
var str =' ';

var returnarray=utility.twoDarray(arr,r,c)
for ( k = 0; k <r; k++) {
    for ( l = 0; l < c; l++) {
 str+=returnarray[k][l]+' ' ;
      
    }
    console.log(str);
    str=' ';
}