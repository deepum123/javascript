/***************************************************************************************************
 * Execution :  cmd >node balancedParentheses.js
 * purpose   :  Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations. 
 *               Ensure parentheses must appear in a balanced fashion. b
 * 
 *  
 * @description 
 * @file     : balancedParentheses.js
 * @overview : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations. 
 *             Ensure parentheses must appear in a balanced fashion. b
 * @module   :  balancedParentheses >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (Deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/


try{
var utility=require('../implementation/stack')


{
        var string = "[(5+6)*(7+8)/(4+3)(5+6)*(7+8)/(4+3)]";
        var exp=string.split(" ")
        var value=areParenthesisBalanced(exp)
        if (areParenthesisBalanced(exp))
            console.log("Balanced ");
        else
            console.log("Not Balanced ");

    }

    // function for check rhis exprestion is balanced or not

  function  areParenthesisBalanced(exp)
{

// empty stack for store the all parenthesis
//@param : st=stack
        var st = new utility.Stack();


        for (var i = 0; i < exp.length; i++)
        {

            if (exp[i] == '{' || exp[i] == '(' || exp[i] == '[')
                st.push(exp[i]);

            if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') {


                if (st.isEmpty()) 
                {
                    return false;
                }

                else if (!isMatchingPair(st.pop(), exp[i])) {
                    return false;
                }
            }

        }

        if (st.isEmpty())
            return true;
        else
            return false; 
  
}

// chech the pop and push data are same are not
//@ param ch1= parenthises one
//@ param ch2= parenthises two

  function  isMatchingPair( ch1, ch2) 
    { 
       if (ch1 == '(' && ch2 == ')') 
         return true; 
       else if (ch1 == '{' && ch2 == '}') 
         return true; 
       else if (ch1 == '[' && ch2 == ']') 
         return true; 
       else
         return false; 
    }

  }
  catch(err)
  {
console.log(err)
  }

module.exports=value