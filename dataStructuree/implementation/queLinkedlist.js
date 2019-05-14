class Node {
   
    constructor(data) {
        this.data = data;
        Node.next = null;
    }
}

class que{
    constructor(){
this.front=null;
this.rear=null;
this.size=0;
    }

enque(data)
{

var temp= new Node(data);
if(this.rear==null){
  this.rear=temp
  this.front=temp
return
}
else{
this.rear.next=temp;
this.rear=temp;
this.size++;
}
}
deque(){


if(que.front==null){
return null;
}
var temp=this.front
this.front=this.front.next;
if(this.front==null){
this.rear=null
}
return temp;

    }


getdata()
{
    var temp = this.front;
    var show = "";
    while (temp!= null) {
     
        show = show+" "+temp.data;

        temp = temp.next;
    }
 //console.log(show)
 return show
} 
}
module.exports={
    que
}

var a=new que()
a.enque(1)
a.enque(45)
a.enque(87098)
a.getdata()
var b=new que()
b.enque(98)
b.getdata()