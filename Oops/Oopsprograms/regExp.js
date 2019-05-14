
/***************************************************************************************************
 * Execution :  cmd > regExp.js
 * purpose   :  Regular Expression Demonstration
 * 
 * 
 * @description 
 * @file     :  regExp.js
 * @overview :  Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
 *               your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. 
 *              Use Regex to replace name, full name, Mobile#, and Date with proper value
 * @module   :  regEXP.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/









const utility=require('../utility/utility')
const readline=require('readline-sync')


  function regExpp()
{
    try{
    
    var name=readline.question("enter your name = ")
    if(!isNaN(name))throw"plz enter the proper name"
    var fullname=readline.question('enter your full name = ')
    if(!isNaN(fullname))throw"plz enter the proper name"
    console.log();


    var mobile=readline.question("enter the mobile number = ")
    if(isNaN(mobile))throw"plz enter digit plz"
    if(mobile.length<10 || mobile.length >10)throw "plz enter the 10 digit number"
    console.log()
    console.log(".....................")
    utility.regExpp(name,fullname,mobile)
    
    }catch(err){
        console.log(err)
        
        regExpp()
    }
    module.exports={name,fullname,mobile}


}
regExpp()
 
