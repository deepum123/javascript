module.exports={

    /**
     *   @description  file call method used for read the .txt file and retrive the data
     */

    fileCall() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/File.txt', 'utf8' );
        var arr = f.split(' ');
        return arr;
    },

    /**
     *   @description writefile method is used to store the data in .txt file
     */

    writeFile(filename,Data)
    {
        const fs = require('fs')
        fs.writeFile(filename,Data,function(err)
       {
            if(err)
            {
                return console.log(err);
            }

        });
    },

    /**
     *   @description file call method used for read the .txt file and retrive the data
     */

    numberfile() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('C:/Users/DEEPU/Desktop/javascript/dataStructuree/dataStrucrurePrograms/number.txt', 'utf8');
      
        return f;
    },
   
 /**
     * @description :This method is used If You pass Staring value and ending value it return prime number  in the range.
     * @param  s1 =number
     * @param  s2 =number
     */
    findPrime(s1, s2) {
        var flag = 0, k = 0;
        var prime = [];

        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = i;
            }
        }
        return prime;
    },
    /**
     * @description :This method is used If You pass Staring value and ending value it return prime number which are anagram in the range.
     * @param  ii =number
     * @param  jj =number
     */
             findAnaPrime(ii, jj) {
        var primes = this.findPrime(ii, jj);
        var n = primes.length;

        var anaPrimes = [];
        var h = 0;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                if (this.Anagram(primes[i], primes[j])) {
                    anaPrimes[h++] = primes[i];
                    anaPrimes[h++] = primes[j];
                }
            }
        }
        return anaPrimes;
    },
     /**
     * @description :This method is used If You pass Staring values and its return a boolean values for which are anagram or not 
     * @param  str1 =string
     * @param  str2 =string
     */
    Anagram(st1, st2) {

        if (st1.length != st2.length) {
            return false;
        }
        let unsortedStr1 = "" + st1;
        let unsortedStr2 = "" + st2;

        var ch = this.sort(unsortedStr1);
        var ch1 = this.sort(unsortedStr2);

        if (ch === ch1) {
            return true;
        }
        else {
            return false;
        }
        
    },


    /**
     * @description :This method is used If You pass Staring value and its return a sorted string 
     * @param  st =string
     */
    sort(arr) {

        var ch = arr.split('');
        for (var i = 0; i < ch.length; i++) {
            for (var j = i + 1; j < ch.length; j++) {
                if (ch[i] > ch[j]) {
                    var temp = ch[i];
                    ch[i] = ch[j];
                    ch[j] = temp;
                }
            }
        }
        var sort = "";
        for (var i = 0; i < ch.length; i++) {
            var sort = sort + ch[i];
        }
        
        return sort;
    },
}


