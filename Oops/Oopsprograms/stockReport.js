/***************************************************************************************************
 * Execution :  cmd > stockReport.js
 * purpose   : Write a program to read in Stock Names, Number of Share, Share Price.
 *            Print a Stock Report with total value of each Stock and the total value of Stock.
 * 
 * 
 * @description 
 * @file     :  stockReport.js
 * @overview :  I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price 
 *              Logic -> Calculate the value of each stock and the total value 
 *              O/P -> Print the Stock Report. 
 * @module   :  stockReport.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/



const filestream = require('fs')
const readline = require('readline-sync')
class stockk {
    constructor(StockNames, NumberofShare, SharePrice, totalprice) {
        this.StockNames = StockNames;
        this.NumberofShare = NumberofShare;
        this.SharePrice = SharePrice;
        this.totalprice = totalprice
    }

}
let obj ={
    stock : []
};

var data = [];
function user() {
    try {
        const stock = readline.question('how many stocks you want')
        if (isNaN(stock)) throw "plz enter enter the number "
        Store(stock)

    }
    catch (err) {
        console.log(err)
        
    }
   
}

user()

function Store(stock) {
    try {
        var c = 0;
        while (c < stock) {
            const StockNames = readline.question('enter the stock name ')
            if (!isNaN(StockNames)) throw 'plz enter the string'
            const NumberofShare = readline.question('enter the numberof shares')
            if (isNaN(NumberofShare)) throw 'plz enter the digits'
            const SharePrice = readline.question('enter the share price ')
            if (isNaN(SharePrice)) throw 'plz enter the digits'

            console.log();
            var totalshareprice = NumberofShare * SharePrice;
            var st = new stockk(StockNames, NumberofShare, SharePrice, totalshareprice)
           // data.push(st)
           obj.stock.push(st)
            writefile(obj)
            console.log(" data added")

            c++

            
        }

    

    }
    catch (err) {
        console.log(err)
        console.log("error mothod recall")
        console.log()
        
        Store(stock)
       
    }
   

}

function writefile(data) {
    var data1 = JSON.stringify(data)
    filestream.writeFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/stockReport.json', data1)
}

function readfile() {
    var data2 = filestream.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/stockReport.json')
    var data3 = JSON.parse(data2)
    console.log(data3)


}


function option() {
    try {
        var choice = readline.question('enter the 1 for print out and 2 for exit')
        if (isNaN(choice)) throw "plz enter the digits"
        switch (choice) {
            case '1': printout();
                break;
            case '2': exit();
            break
        }
   
    }
    catch (err) {
        console.log(err)
        
        option()
      
    }
 
}

option()
function printout() {

    readfile()
}
function exit() {
    console.log("................welcome again.................")
    process.exit();
} 



