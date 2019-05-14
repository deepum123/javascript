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








const readline = require('readline-sync')
const filestream = require('fs')

class address {
    constructor(firstname, lastname, idno, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idno = idno;
        this.address = address;

    }
}
class address2 {
    constructor(state, city, zip, phno) {
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.pincode = phno;



    }
}

var adressArr = [];

function addperson() {

    try {
        var firstname = readline.question('enter the first name')
        if (!isNaN(filestream)) throw "plz enter the string"
        var lastname = readline.question('enter the last name')
        if (!isNaN(lastname)) throw "enter the string plz"
        var idno = readline.question('enter the idno')
        if (isNaN(idno)) throw "enter the digits plz"
 console.log()
        
        console.log(".........residence details.........")
        var state = readline.question('enter the state')

        if (!isNaN(state)) throw 'enter the string plz'
        var city = readline.question('enter the city name')
        if (!isNaN(city)) throw 'enter the string plz'
        var zip = readline.question('enter the zip code plz')
        if (isNaN(zip)) throw 'enter the digits plz'
        var phno = readline.question('enter the phone number')
        if (isNaN(phno)) throw 'enter the digitsn plz'

        var address3 = new address2(state, city, zip, phno)
        adressArr.push(address3)
        var address4 = new address(firstname, lastname, idno, adressArr)
        var r = readfile()
        r.push(address4)
        writefile(r)

    }
    catch (err) {
        console.log(err)
    }
}


function ask(idnoo) {

    var choice = readline.question("enter 1 for changing the address..\n..2 for no")
    try {
        if (isNaN(choice)) throw "enter the digits only"
        if (choice < 0 || choice > 2) throw " plz enter 1 or 2"
        if (choice == 1) {
            console.log(".........residence details.........")
            var state = readline.question('enter the state')
            if (!isNaN(state)) throw 'enter the string plz'
          
            if (!isNaN(state)) throw 'enter the string plz'
            var city = readline.question('enter the city name')
            if (!isNaN(city)) throw 'enter the string plz'
            var zip = readline.question('enter the zip code plz')
            if (isNaN(zip)) throw 'enter the digits plz'
            var phno = readline.question('enter the phone number')
            if (isNaN(phno)) throw 'enter the digitsn plz'

            var address34 = new address2(state, city, zip, phno)
            var addressjson = readfile();


            for (const key in addressjson) {
                if (addressjson[key].idno == idnoo)
                    addressjson[key].address = address34

            }
            writefile(addressjson);



        }
        else {
            return
        }
    } catch (err) {
        console.log(err)
        ask(idnoo)
    }
}

function deletee() {
    var idn = readline.question("enter the id number")
    try {
        if (isNaN(idn)) throw "enter the digits only"




        var addressjson = readfile();

        var f = 0
        for (const key in addressjson) {
            if (addressjson[key].idno == idn)
                var f = 1;

            var index = addressjson.indexOf(idn)
            addressjson.splice(index, 1)


            writefile(addressjson);
        }




        if (f == 0) {
            console.log("your id is not present")
            this.deletee()
        }
    } catch (err) {
        console.log(err)
        deletee()
    }
}


function sort() {
    var addressjson = readfile();
    addressjson.sort(function (a, b) {
        return a.idno - b.idno
    })

    writefile(addressjson)
    console.log("your file is sorted")




}



function readfile() {

    var data = filestream.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/address.json')
    var data1 = JSON.parse(data)
    console.log(data1)
    return data1
}

function writefile(data) {
    var data1 = JSON.stringify(data)
    filestream.writeFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/address.json', data1)

}




module.exports = { addperson, ask, deletee, sort }
