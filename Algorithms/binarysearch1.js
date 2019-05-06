var utility=require('../Utility/new')
var arr=[5,3,6,3,8,7,9,3];
var n=7;
var l = arr.length - 1;
var output=utility.binarysearch(arr,n,l)
if(output==-1)
{
console.log("element is not present" )
}
else 
{
console.log("element is  present " )
}
module.exports=output;