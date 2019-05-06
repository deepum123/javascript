/***************************************************************************************************
 * Execution :  cmd > anagramReverse.js
 * purpose   :  Print the Anagrams in the Reverse Order. 
 * 
 * 
 * @description 
 * @file     :  anagramReverse.js
 * @overview :  Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using                
 *              the  and Print the Anagrams in the Reverse Order. 
 * @module   :  anagramReverse >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/

var utility=require('../utility/utility')
var utility2=require('../implementation/stacklinkedlist')
var stackk=new utility2.StackedLink();
var anaprime=utility.findAnaPrime(0,1000)


for (let i = 0; i <anaprime.length; i++) {
    stackk.push(anaprime[i])
        
}

stackk.display()

module.exports=anaprime

