/***************************************************************************************************
 * Execution :  cmd >node primeAnagram.js
 * purpose   :  e Prime Number Program and store only the numbers in that range that are Anagrams.
 * 
 * 
 * @description 
 * @file     :  primeAnagram.js
 * @overview :  For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.               
 *              Further store in a 2D Array the numbers that are Anagram  
 * @module   :  primeAnagram >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/



const utility = require('../utility/utility');

 {
    var anaprime = [];
    var a = 0;
    var b = 100;
    for (var i = 0; i < 10; i++) {
    
        anaprime = utility.findAnaPrime(a, b);
        console.log("[ "+a + " " + b + "] ==> [" + anaprime+"]")
        a = a + 100;
        b = b + 100;
    }
}

module.exports=anaprime