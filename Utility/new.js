module.exports = {

    //1. User Input and Replace String Template “Hello <<UserName>>, How are you?”

    stringpro(s) {
        var s1 = 'Hello <<UserName>>, How are you ?';
        var s2 = s1.replace("<<UserName>>", s);
        console.log(s2);
    },
/******************************************************************************************** */

    // 3.leap year program
    leapyear(y) {
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        { 
            console.log('this year is leap year')
            return true;
        
        }
        else 
        
            console.log("this year is not a leap year")
            return false
    

    },


/******************************************************************************************************** */
    // 4 .power of Power of 2

    poweroftwo(p) {
        var pow = 1;
        for (let index = 0; index <= p; index++) {
            pow = pow * 2;

            console.log(pow);
        }

    },
/******************************************************************************** */



    // find the hormonic number
    hormonic(n) {
        var value = 0;

        while (n > 0) {
            value = value + (1 / n);
            n--
        }
        console.log(' this is the final hormonic value ' + value)
    },
/*************************************************************************************** */

    // prime factor  program  
    primefactor(p) {
        for (let index = 2; index < p; index++) {
            while (p % index == 0) {
                console.log(index);
                p = p / index;

            }
        }

        if (p > 2) {
            console.log(p)
        }
    },
/********************************************************************************************* */


    //2. Flip Coin and print percentage of Heads and Tails

    flipcoin(f) {
        var win = 0;
        var loss = 0;
        var f1 = f;
        while (f > 0) {
            var r1 = Math.random(10);
            if (r1 > 0.5) {
                win++
            }
            else {
                loss--
            }
            f--

        }
        var winperc = win * 100 / f1;
        var lossperc = loss * 100 / f1;
        console.log(' win per=' + winperc)
        console.log('loss perc=' + lossperc)
    },

    /************************************************************************************* */


    //// coupon program 
    coupon(p) {
        var arr = []
        for (let index = 0; index < p; index++) {
            var random = Math.floor(Math.random() * p)
            arr[index] = random

            for (let index1 = 0; index1 < index; index1++) {
                if (arr[index] == arr[index1])
                    index--;

            }
        }
        for (let index3 = 0; index3 < p; index3++) {

            console.log("value = ", arr[index3])
        }



    },
/****************************************************************************************** */



    // program of Sum of three Integer adds to ZERO
    triplets(arr) {
        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                for (let k = 0; k < arr.length; k++) {

                    if (arr[i] + arr[j] + arr[k] == 0)
                        console.log("arrays is triplets array = " + arr[i] + " " + arr[j] + " " + arr[k]);
                    break;

                }
            }
        }

    },
/***************************************************************************************** */



    // gamler program 
    gamler() {
        const read = require('readline-sync');

        var win = 0;
        var loss = 0;
        var toss = 0;
        var amout = 50;

        while (amout <= 100 && amout > 0) {
            toss++
            var bet = read.question('enter the bet amout')
            var lucky = read.question('enter the lucky number ')
            var rand = Math.floor(Math.random() * 6 + 1)
            console.log('random number =' + rand)
            if ((rand + 1) == lucky) {
                console.log('hey dude your win bet amout added to your wallet ')
                win++
                amout = amout + bet;

            }
            else {
                console.log('sorry dude your loss bet amout reduction from your walletn')
                loss--
                amout = amout - bet;
            }
        }
        console.log('game is end')
        var winperc = 0;
        var lossperc = 0;
        winperc = win * 100 / toss;
        lossperc = loss * 100 / loss;
        console.log('win perc is=' + winperc)
        console.log('loss perc is=' + lossperc)

    },
/********************************************************************************************* */




    // two D array program

    twoDarray(arr, r, c) {
        const read = require('readline-sync')

        for (let index = 0; index < r; index++) {
            arr.push([])
            for (let j = 0; j < c; j++) {
                var value = read.question('enter the array values')
                arr[index][j] = value
            }
        }
        return arr
    },
    /******************************************************************************************** */


    //  program of Simulate Stopwatch Program

    watch(start, stop) {
        var t;
        r = stop - start
        return r
    },
    /****************************************************************************** */


    // binarysearch program

    
    binarysearch: function (arr, ele,l) {
        var n = 0;
        var m = 0;
       var l=l;
        while (n < l) {
            m = Math.floor((l + n) / 2);

            if (arr[m] === ele) {
                return m;
            }
            else if (arr[m] < ele) {
                n = m + 1;
            }
            else
                l = m - 1;
        }
        return -1;
    },
/*********************************************************************** */


    // bubblesort program
    bubblesort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    var t = arr[i]
                    arr[i] = arr[j]
                    arr[j] = t
                }


            }

        }
        return arr

    },
/********************************************************************** */


    // insortionsort program


    insortionsort(array) {
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
    },
    /*********************************************************************** */


    //  program of An Anagram Detection Example 


    anagram(s1, s2) {

        s1 = s1.toLowerCase() 
        s2 = s2.toLowerCase()
        var utility = require('./new')
        s1 = utility.bubblesort(s1)
        s1 = utility.bubblesort(s2)
        var array1 = s1.split(" ");
        var array2 = s2.split(" ");
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false
            }
        }
        return true
    },
    distance(x, y) {
        var a = Math.pow(y, 2) + Math.pow(x, 2)
        var b = Math.sqrt(a)
        console.log(b)


    },
    /*********************************************************************** */


    // quadrantic equation program

    quadratic(a, b, c) {
        var delta = 0;
        var x1 = 0;
        var x2 = 0;
        var delta = b * b - 4 * a * c
        root1 = (-b + Math.sqrt(delta)) / (2 * a)
        root2 = (-b - Math.sqrt(delta)) / (2 * a)

        console.log(root1)
        console.log(root2)

        //2 5 3
    },
/***************************************************************************************** */


    // windchill program 

    windchill(temp, speed) {
        wind = 0;
        wind = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
        console.log(wind)
    },
/****************************************************************************** */

    //tic tac tae program 

    tictactae() {


        var turn = 'x'
        var board = []
        var str = ' '

        {
            for (let i = 0; i < 3; i++) {
                board.push([])
                for (let j = 0; j < 3; j++) {
                    board[i][j] = "_"
                }
            }
            play()
        }
        function play() {

            var playing = true
            while (playing) {
                const read = require('readline-sync')
                var row = read.question('enter the rows number')
                var col = read.question(' enter the colum number')

                board[row][col] = turn

                if (gameover(row, col)) {
                    playing = false;
                    console.log("gameover player " + turn + " wins")
                }
                printboard();
                if (turn === 'x')
                    turn = 'o'
                else
                    turn = 'x'
            }
        }
        function printboard() {
            for (let i = 0; i < 3; i++) {

                for (let j = 0; j < 3; j++) {
                    if (j == 0)
                        str += '| '
                    str += board[i][j] + ' | ';


                }
                console.log(str);
                str = ' ';


            }
            console.log('\n')
        }

        function gameover(rmove, cmove) {
            if (board[0][cmove] === board[1][cmove] && board[0][cmove] === board[2][cmove] && board[1][1] != "_") {
                return true
            }
            if (board[rmove][0] === board[rmove][1] && board[rmove][0] === board[rmove][2] && board[1][1] != "_") {
                return true
            }
            if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] != "_") {
                return true
            }
            if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[1][1] != "_") {
                return true
            }
            return false



        }
    },
    /****************************************************************************** */


    // vending machine

    machine(note, count, amount) {
        for (let i = 0; i < 9; i++) {
            if (amount >= note[i]) {
                count[i] = Math.floor(amount / note[i])
                amount = amount - count[i] * note[i];
            }
        }
        for (let j = 0; j < count.length; j++) {
            console.log(note[j] + ':  ' + count[j])


        }

    },

/******************************************************************** */

    // decimal to binary convertion

    decimaltobinary(n) {


        bin = '';
        while (n > 0) {
            bin = (n % 2) + bin;
            n = Math.floor(n / 2)

        }
        var output = parseInt(bin)
        console.log(output)
        return bin
    },

    /*Write Binary.java to read an integer as an Input, convert to Binary using toBinary
    function and perform the following functions.
    i. Swap nibbles and find the new number.
    ii. Find the resultant number is the number is a power of 2.*/
    swapnibble(n) {
        var output = ((n & 0x0F) << 4 | (n & 0xF0) >> 4);
        console.log(output)
    },


    /************************************************* */
/// 1 to n prime number
    prime(n) {
        for (let i = 1; i < n; i++) {
            {
                var isprime = true;
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        isprime = false;
                        break;
                    }
                }
                if (isprime)
                    console.log(i)
                    
            }

        }

    },
    
    /******************************************************* */
    // prime palindrome number
    primepalindrome(n) {
      var rev=0
      var i
        var t = n
        
        while (n > 0) {

             rev = rev * 10 + (n % 10)
           n = Math.floor(n / 10)
            
        }
        if (rev == t) 
        {
    
            for (var i = 2; i < rev; i++) {
                if (rev % i == 0) {
                    console.log(i + " is not a prime palindrome number")
                    break;
                }
            }
            if (rev == i)
                console.log(t + " is a prime palindrome number")
        }
            else
                console.log(t + " is not a  palindrome number")
        
    }
}