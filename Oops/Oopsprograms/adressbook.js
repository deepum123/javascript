/***************************************************************************************************
 * Execution :  cmd > address.js
 * purpose   : User Interface for a Simple Address Book
 * 
 * 
 * @description 
 * @file     :  address.js
 * @overview :  The software to be designed is a program that can be used to maintain an address book. An address book
                holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
                phone number.
 *       
 * @module   :  address.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/






const req = require('../Oopsprograms/address')
const readline = require('readline-sync')


function options() {
    try {

        console.log("enter 1..for add address..\n..2> edit the  existing address.\n..3>delete address..\n.4..sort...\n.5..exit")
        var choice = readline.question('enter your choice ')
        if (isNaN(choice)) throw "enter the digits"
        if (choice < 0 || choice > 5) throw "plz enter the correct option"

        switch (choice) {
            case '1':
                req.addperson()
                options()
                break

            case '2': var idno = readline.question("enter your id number")
                req.ask(idno)
                break;

            case '3': req.deletee()
                break

            case '4': req.sort()
                break

            case '5':

                console.log("...........exit.............")
                process.exit()
                break
        }
    }
    catch (err) {
        console.log(err + " error")
        options()
    }
    module.exports = { choice }
}
options()
