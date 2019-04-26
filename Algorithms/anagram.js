var utility=require('../Utility/new')
const readline=require('readline-sync')
var firststring=readline.question('enter the first string')
var secondstring=readline.question('enter the second string')
var firststring=firststring.trim();
var secondstring=secondstring.trim();
var output=utility.anagram(firststring,secondstring)
if(output)
    console.log("strings are anagram")
else
console.log(" strings are not a anagram")
