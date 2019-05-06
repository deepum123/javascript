/***************************************************************************************************
 * Execution :  cmd >node Orderlist.js
 * purpose   :  Read a List of Numbers from a file and arrange it ascending Order in a Linked List.  
 * @description 
 * @file     :  Orderlist.js
 * @overview :  Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position 
 * @module   :  Orderlist >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **********************************************************************************************************/

var linkedlist=require('../implementation/linkedlist')
var utility=require('../utility/utility')

// Take user input for a number
var readline=require('readline-sync')
var number=readline.question('enter the number ')


// Read a List of Numbers from a file and arrange it ascending Order 

var data=utility.numberfile() 
var sortedarray=utility.sort(data)

//creat the new empty linked list object name as node
var node=new linkedlist.LinkedList();
for (let i = 0; i < data.length; i++) {
    node.add(sortedarray[i])
   
}

//show method is used for display the moved or linked list stored data
node.show()

//searching the particuler number is thier or not
var result=node.search(number);

//if search method returns true the number is present and then remove the number using remove method
if(result)
{
    node.remove(number)
    var output=node.show()
    utility.writeFile('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/number.txt',output)
    console.log(output)
}
//if search method returns false the number is not present and then add the number  to linked list using  add method
else
{
    node.add(number)
    var output=node.show()
    utility.writeFile('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/number.txt',output)
    console.log(output)

}

module.exports=output;