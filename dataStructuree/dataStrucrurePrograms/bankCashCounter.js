/***************************************************************************************************
 * Execution :  cmd >node bankCashCounter.js
 * purpose   :  Create a Program which creates Banking Cash Counter where people come in 
 *              to deposit Cash and withdraw Cash 
 * @description 
 * @file     :  bankCashCounter.js
 * @overview :  Have an input panel to add people to Queue to either deposit or withdraw 
 *              money and dequeue the people. Maintain the Cash Balance. 
 * @module   :  bankCashCounter > This is a optional if expicitly its an npm or local package
 * @author   :  bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/


var utility = require('../implementation/queue')
var que = new utility.Queue;
var readline = require('readline-sync')
var members = readline.question('how many members you what to transtions')
totalamout = 10000;

// Panel to add People to Queue to Deposit or Withdraw Money  

for (let index = 0; index < members; index++) {

  var names = readline.question("enter the names")
  que.enque(names)
}

// display the added peoples
que.display()
for (let index = 0; index < members; index++) {
  console.log("hii   " + que.dequee() + "   enter your choice please")
  var choice = readline.question(' enter the 1 for deposite or enter the 2 for withdraw     ')

  // choice 1 for the deposite the perticular amount the account
  if (choice == 1) {

    var amount = readline.question('enter the amout for deposite =')
    amount = parseInt(amount)
    totalamout = totalamout + amount;
    console.log(" bank balance after deposite =" + totalamout)
  }
  // choice 2 for the withdraw the perticular amount

  else if (choice == 2) {
    var amount = readline.question('enter the amount to withdraw =')
    amount = parseInt(amount)
    if (amount > totalamout)
      console.log("sorry  that much amount not present in the bank  ")
    else {
      totalamout = totalamout - amount
      console.log("after withdraw bank amount is =" + totalamout)
    }

  }
  else
    console.log("your enter the wrong choice")


}

module.exports=totalamout;