
/***************************************************************************************************
 * Execution :  cmd > DeckOfCards.js
 * purpose   : Write a Program ​DeckOfCards
 * 
 * 
 * @description 
 * @file     :   DeckOfCards.js
 * @overview :   To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") &
 *               Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
 *       
 * @module   :   DeckOfCards.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/




function deckCard() {

    var suit = ["C", "D", "H", "S"]
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    var deck = []
    var n = suit.length * rank.length
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            {
                deck.push(rank[j] + " " + suit[i] + " ")
            }
        }

    }


    for (let k = 0; k < n; k++) {
        var random = Math.floor((Math.random() * deck.length))
        var random2 = Math.floor((Math.random() * deck.length))
        var temp = deck[random]
        deck[k] = deck[random2]
        deck[random] = temp

    }




    var arr = [];

    for (let i = 0; i < 4; i++) {
        {
            arr.push([])
            for (let j = 0; j < 9; j++) {
                arr[i][j] = deck[i + j]


            }

        }
    }
    console.log(arr)

    var str = '';
    for (let n = 0; n < 4; n++) {

        var person = n + 1;
        str = str + ('[ person' + person + "] - [")
        for (let m = 0; m < 9; m++) {
            var str = str + "    " + arr[n][m]

        }
        str = str + "]"
        console.log(str)
        str = ''
    }
module.exports={arr,str,deck}
}
deckCard()
