/***************************************************************************************************
 * Execution :  cmd >node primeNumberr.js
 * purpose   :  Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 * @description 
 * @file     :  primeNumberr.js
 * @overview :  the prime numbers in a 2D Array, the first dimension represents the range 0-100,              
 *              100-200, and so on. 
 * @module   :  primeNumberr >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/

const utility = require('../utility/utility');
{
    var prime = [];
    var a = 0;
    var b = 100;
    for (var i = 0; i < 10; i++) {
    
        prime = utility.findPrime(a, b);
        console.log("[ "+ a + " - " + b + "] ==> [" + prime+"]")
        a = a + 100;
        b = b + 100;
    }
}
module.exports=prime