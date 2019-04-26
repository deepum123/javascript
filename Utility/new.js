module.exports = {

    //1. User Input and Replace String Template “Hello <<UserName>>, How are you?”

    stringpro(s) {
        var s1 = 'Hello <<UserName>>, How are you ?';
        var s2 = s1.replace("<<UserName>>", s);
        console.log(s2);
    },

    // 3.leap year program
    leapyear(y) {
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
            console.log('this year is leap year')
        }
        else {
            console.log("this year is not a leap year")
        }
    },

    // 4 .power of Power of 2

    poweroftwo(p) {
        var pow = 1;
        for (let index = 0; index <= p; index++) {
            pow = pow * 2;

            console.log(pow);
        }

    },


    // find the hormonic number
    hormonic(n) {
        var value = 0;

        while (n > 0) {
            value = value + (1 / n);
            n--
        }
        console.log(' this is the final hormonic value ' + value)
    },


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

    //// coupon program 
    coupon(p) {
        let arr = new Array(p);
        for (let index = 0; index < p; index++) {
            var random = Math.floor(Math.random(p))
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

    //  program of Simulate Stopwatch Program

    watch(start, stop) {
        var t;
        r = stop - start
        return r
    },

    // binarysearch program

    binarysearch(arr, ele) {
        var n = 0;
        var m = 0;
        var l = arr.length - 1;
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

    //  program of An Anagram Detection Example 

    anagram(s1, s2) {

        s1 = s1.toLowerCase()
        s2 = s2.toLowerCase()
        var utility = require('../Utility/new')
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


    // windchill program 

    windchill(temp, speed) {
        wind = 0;
        wind = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
        console.log(wind)



    }



}