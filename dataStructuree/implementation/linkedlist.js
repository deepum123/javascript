

// Node Class
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    /**
     *   @description  this method is used for add an element to linked list
     */
    add(element) {              
      var node = new Node(element);
      if (this.head == null) {
        this.head = node;
        this.size++;
  
      } else {
        var current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        this.size++;
      }
    }

    /**
     *   @description to add the element at the first node.
    */
    insertFirst(element) {    
      var node = new Node(element);
      if (this.head == null) {
        this.head = node;
        this.size++;
        return;
      } else {
        node.next = this.head;
        this.head = node;
        this.size++;
        return;
      }
    }
  
      /**
      *   @description to insert the data at perticular index.
      */
      insert(index, data) {
        var node = new Node(data)
        var current = this.head;
        if (index < 0 || index > this.size) {
            return false;
        }
        else {
            for (let i = 1; i < index; i++) {
                current = current.next;
            }
            node.next = current.next
            current.next = node
        }
        this.size++
      }
    
   

    /**
     *   @description pop the last element and delete the node
     */
    pop() {
      if (this.head==null) {
        return false;
    }
    else {
      var current=this.head;
      var prev=null
       while(current.next!=null)
       {
         prev=current
         current=current.next;
       }
       var data=current.data;
       prev.next=current.next
       return data


      }
    }
    /**
     *   @description pop the index value and delete the node
     */ 
    popIndex(index) {
     if (index < 0 || index > this.size) {
        return false;
    }
    else {
     var current=this.head;
      var prev=null
        for (let i = 0; i < index; i++) {
          prev=current
            current = current.next;
        }
        var data = current.next.data
          prev.next=current.next;
          this.size--
          return data
    }
  
    

    }


    /**
     *   @description remove the perticuler element
     */ 
    remove(element) {
      var current = this.head;
      var prev = null
      if(current.element==element){
           this.head=this.head.next;
      }
           else
    {
      while (current.element !== element) {
          prev = current
          current = current.next
      }
      prev.next = current.next;
      this.size--

    }
    }
    /**
     *   @description search method for check perticular data is there are not
     */ 
    search(item) {
      if (this.head == null) {
        return false;
      }
  
      var curr = this.head;
      while (curr) {
        if (curr.element == item) {
          return true;
        }
  
        curr = curr.next;
      }
      return false;
    }

    // isEmpty method is check the linked list and returns boolean values for empty or not 
    isEmpty() {
      if (this.size == 0) {
        return true;
      }
      return false;
    
  }

  //return the size of linked list
    size_of_list() {
      return this.size;
    
    }
    // display the linked list data
   
    show() {
      var curr = this.head;
      var str = "";
      while (curr) {
        str = str + curr.element + " ";
        if (curr.next != null) {
          str = str + " ";
        }
        curr = curr.next;
      }
      console.log(str);
      return str;
    }
  
  }

/*
  var list=new LinkedList()
  list.add(35)
  list.add(52)
  list.add(65)
  list.show()
  list.insertFirst(12)
  list.show()
  list.insert(2,37)
  list.show()
  list.pop()
  list.show()
  list.popIndex(1)
  list.show()
  list.add(88)
  list.show()
  list.remove(52)
  list.show()
  var result=list.search(37)
  console.log(result)
  var result=list.search(102)
  console.log(result)*/
  module.exports = {
    LinkedList
  };