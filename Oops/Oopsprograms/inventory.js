/***************************************************************************************************
 * Execution :  cmd > inventory.js
 * purpose   :  Create a JSON file having Inventory Details for Rice, Pulses 
 *              and Wheats with properties name, weight, price per kg
 * 
 * 
 * @description 
 * @file     :  inventory.js
 * @overview :  I/P -> read in JSON File 
 *              Logic -> Get JSON Object in Java or NSDictionary in iOS.Create Inventory Object from JSON. Calculate the value for every Inventory. 
 *              O/P -> Create the JSON from Inventory Object and output the JSON String 2 
 * @module   :  inventory.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/







const filestream = require('fs');
const readline = require('readline-sync');
class inventary {
    constructor( pname, weight, price,totalprice) {
     //   this.name = name;
        this.pname = pname;
        this.weight = weight;
        this.price = price;
       this.totalprice=totalprice

    }
}
class name{
    constructor(costumerName){
        this.costumerName=costumerName
    }
}
var obj={
    Details :[]
}
var totallprice=0;
var pricekg = [20, 40, 60]
console.log("..........wlecome...........")
console.log();

try{
    
    function entry(){
     costumerName = readline.question("enter the user name")
    try{
    if (!isNaN(costumerName)) throw "please enter the proper name"
    console.log();
    var nn = new name(costumerName);
   // data.push(nn);
   obj.Details.push(nn)
    }catch(err){
        console.log(err)
        entry()
    }
    }
    function costomer() {
        console.log("1.>purchage...2.>exit")
        console.log();

        try {
             choice = readline.question("enter your choice please")
            console.log(choice)
            if (isNaN(choice)) throw " please enter the correct choice"
            if (choice < '1' || choice > '2') throw " enter within the range"
        }
        catch (err) {
            console.log(err)
            console.log(" plz enter the correct choice")
            costomer()
        }
        switch (choice) {
            case '1': purchage();
                break;
            case '2': exit();

        }
    }
    entry()
    costomer()

    function purchage() {
        console.log("what do you want");
        arr = ["rice", "sugar", "oil"]
        console.log("1.>rice......2>sugar....3>oil")
        console.log();
        try {
             pname = readline.question(" choice correct")
            if (isNaN(pname)) throw "plz enter the number"
            if(pname<'1' || pname>'3')throw "enter within a 1 to 3"
             kg = readline.question("how many kgs you want")
            console.log()
            if (isNaN(kg)) throw "plz enter the number"
            if (kg < 1) throw "plz enter the valid kg"
            console.log(arr[pname - 1] + "per kg is" + pricekg[pname - 1] + "....")
            console.log();

            console.log(arr[pname - 1] + " for" + kg + "kg is" + pricekg[pname - 1] * kg + "....")
            var price = (pricekg[pname - 1] * kg)
            var price1 = price;
              
               totallprice=totallprice+price1

            var cls = new inventary( arr[pname - 1], Number(kg), price1,totallprice)
           //data.push(cls);
obj.Details.push(cls)
            console.log("hiiiii")
            var jst = JSON.stringify(obj)
            filestream.writeFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/inventary.json',jst)
        }
        catch (err) {
            console.log("error" + err);
            purchage()

            
        }


        option()

    }
    function viewcart() {
        var data = filestream.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/inventary.json')
        var data1 = JSON.parse(data)
        console.log(data1)
        option()
    }

    function option() {
        console.log("do you want continue ...?")
        console.log(" press 1.>to purchage again 2.>to go viewcart  3.>to bill");
        console.log();
        try {
      opt = readline.question("enter your choice")
            if (opt < '1' || opt > '3') throw " enter   within the range"
            switch (opt) {
                case '1':
                    purchage();
                    break;
                case '2':
                    viewcart()
                    break;
                case '3':
                    bill();
                    break;

            }
        }
        catch (err) {
            console.log("error" + err);
            option();

        }

    }
    function bill() {
        var data = filestream.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/inventary.json')
        var data1 = JSON.parse(data)
        console.log(data1)
    
    }


function exit() {

    console.log('..........................visit again.............')
    process.exit();
}
}
catch(err){
    console.log(err)
}






