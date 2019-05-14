


/***************************************************************************************************
 * Execution :  cmd > DeckOfCardsQueue.js
 * purpose   :  Write a Program ​DeckOfCards
 * 
 * 
 * @description 
 * @file     :   DeckOfCardsQueue.js
 * @overview :   having ability to Sort by Rank and maintain the cards in a Queue implemented using               Linked List. Do not use any Collection Library. Further the Player are also arranged in Queue. 
 *               Finally Print the Player and the Cards received by each Player
 *              
 *       
 * @module   :   DeckOfCardsQueue.js >This is a optional if expicitly its an npm or local package
 * @author   :   Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/






const quee=require('C:/Users/DEEPU/Desktop/javascript/dataStructuree/implementation/queLinkedlist')
const utility=require('C:/Users/DEEPU/Desktop/javascript/Utility/new.js')

function deckCard() {

    var suit = ["C", "D", "H", "S"]
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    var deck = []
    var n = suit.length * rank.length
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            {
                deck.push(rank[j]  + suit[i] )
            }
        }

    }


    for (let k = 0; k <deck.length; k++) {
        var random = Math.floor((Math.random()*n))
        var temp = deck[k]
        deck[k] = deck[random]
        deck[random] = temp

    }
    var person1=new quee.que()

for (let i = 0; i< 5; i++) {
    
  
 person1.enque(deck[i])
 //console.log(person1)


    }
  
    var person2=new quee.que()
  for (let j= 5; j< 10; j++) {
    
       
      person2.enque(deck[j])
      
      
       }
       var person3=new quee.que()
       for (let j= 10; j< 15; j++) {
         
            
           person3.enque(deck[j])
           
           
            }
            var person4=new quee.que()
            for (let j= 15; j< 20; j++) {
              
                 
                person4.enque(deck[j])
                
                
                 }

var a1=person1.getdata()
  //console.log(a1)
 var a1=a1.split('  ')

var sortarray=insortionsort(a1)
console.log("person 1 = ["+sortarray+"]")

var a2=person2.getdata()
// console.log(a2)
 var a2=a2.split('  ')

var sortarray2=insortionsort(a2)
console.log("person 2 = ["+sortarray2+"]")
var a3=person3.getdata()
// console.log(a3)
 var a3=a3.split('  ')
 var sortarray3=insortionsort(a3)
console.log("person3 = [" +sortarray3+"]")

var a4=person4.getdata()
 //console.log(a4)
 var a4=a4.split('  ')

var sortarray4=insortionsort(a4)
console.log( "person4 = ["+sortarray4+"]")

module.exports={sortarray,sortarray2,deck}

}
deckCard()
function insortionsort(array)
 {
    var temp
    var j
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j = j - 1;
        }
        array[j] = temp


    }

    
    return array
}
