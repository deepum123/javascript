
// Queue class

class Queue{

    constructor(){
        this.items=[];
        this.size=0;
        this.capacity;
        this.front=-1;
        this.rear=-1;


    }


/**
*   @description enque method for add the data to queue
*/
enque(data){
    console.log(data)

if(this.front== -1)
{
    this.front++
}
this.size++
    this.items[++this.rear]=data

}

/**
*   @description dequee method for deque the first data
*/

dequee(){
if(this.front==-1){
console.log("queue is empty")
return null
}
var data=this.items[this.front++];
this.size--
if(this.front>this.rear){
    this.front=this.rear=-1
}
return data
}


/**
*   @description returns the size of the queue
*/
getsize(){

    return this.size;

}

/**
*   @description isEmpty method is check the queue and returns boolean values for empty or not 
*/
isEmpty(){
    if(this.size==0)
    return true
    else
     return false
}

// display the queue data
display()
{
var str=" "
for (let i = this.front; i <=this.rear; i++) {
    var str=str +" "+ this.items[i]
   
    
}
console.log(str)

}

}

/*var q=new Queue()
q.enque(5)
q.enque(65)
q.enque(35)
q.display()
q.dequee()
q.display()
console.log(q.isEmpty())
console.log(q.getsize())*/
module.exports={Queue}