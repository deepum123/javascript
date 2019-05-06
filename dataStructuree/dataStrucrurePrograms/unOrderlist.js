/***************************************************************************************************
 * Execution :  cmd >node unOrderlist.js
 * purpose   :  Read the Text from a file, split it into words and arrange it as Linked List.
 *  
 * @description 
 * @file     :  unOrderlist.js
 * @overview :  Take a user input to search a Word in the List. If the Word is not found then add it 
 *              to the list, and if it found then remove the word from the List. In the end save the list into a file b
 * @module   :  unOrderlist >This is a optional if expicitly its an npm or local package
 * @author   : bridgelabz (deepu.M)
 * @version  : 
 * @since    :
 * 
 **
 ********************************************************************************************************/

 
try{
var linked=require('../Implementation/linkedList')
var utility=require('../utility/utility')
var read = require('readline-sync')

// Read from file the list of Words 

var arr=utility.fileCall()
// take user input to search a Text 
var word=read.question("Enter the word to be searched : ")

//creat the new empty linked list object name as node
var node=new linked.LinkedList();
for(let i =0;i<arr.length;i++)
{
    node.add(arr[i])
}

//show method is used for display the moved or linked list stored data
node.show()
//searching the particuler word is thier or not
var b = node.search(word)

console.log(b)
//if search method returns true the word is present and then remove the word using remove method
if(b==true)
{
    console.log(word)
    node.remove(word)
    var output=node.show()
    utility.writeFile('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/File.txt',output)
    console.log(output)
}
// if search method returns false the word is not present and then add the word  to linked list using  add method
else
{
    node.add(word)
    var output=node.show()
    console.log(output)
    utility.writeFile('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/File.txt',output)
}
}
catch(err)
{
    console.log(err)
}

 
module.exports=output;