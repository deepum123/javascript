

//node class

class Node {
   
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// stack linked list class class
class StackedLink {
  
    constructor() {
        this.top = null;
    }

    push(item) {
        var temp = new Node();
        temp.data = item;
        temp.next = this.top;
        this.top = temp;
    }
    /**
     * @description pops out items from the stack 
     */
    pop() {

        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;

    }
    /**
     * @description checks if stack is empty
     */
    isEmpty() {
        return this.top == null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        } else {
            console.log("stack is empty");
            return -1;
        }
    }
    /**
     * @description Display the stack
     */
    display() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        else {
            var temp = this.top;
            var show = "";
            while (temp != null) {

                show = show + temp.data;
                if (temp.next != null) {
                    show = show + " - "
                }
                temp = temp.next;
            }
            console.log(show);
        }
    }
    

    getHead() {
        return this.top;
    }
}
module.exports = {
    StackedLink
}