
//stack class

class Stack {
    constructor(){
        this.items=[]
        this.capacity
        this.size=0;
        this.top=-1;

    }

  /**
  *   @description push the data to stack
  */

push(data){
  
    this.size++
    console.log(data)
    this.items[++this.top]=data
    
}


/**
*   @description  pop the data from stack
*/
pop(){
    if(this.top==-1)
    console.log("stack is empty")
    else 
    this.size--
    return this.items[this.top--]

}

/**
*   @description  return the peak value in the stack
*/
peak()
{
    if(this.top==-1)
    console.log("stack is empty")
    else
    console.log(this.items[top])
}

/**
*   @description returns the size of the stack
*/
getsize(){

    return this.size;

}

/**
*   @description isEmpty method is check the stack and returns boolean values for empty or not 
*/
isEmpty(){
    if(this.size==0)
    return true
    else
     return false
}

/**
*   @description display the stack data 
*/
display(){
        var st = "";
        for (let i = 0; i < this.size; i++) {
            st = st + " " + this.items[i]
        }
        console.log(st)
    

    }


}
module.exports={Stack}


/* var s=new Stack(5);

s.push(8)
s.push(25)
s.push(32)
s.push(856)
s.display() */