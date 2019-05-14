

module.exports = {




    regExpp(name, fullname, mobile) {


        var str = " Hello <<name>>, We have your full name as <<full name>> in our system.\n your contact number is 91-xxxxxxxxxx.\n Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. "

        str = str.replace('<<name>>', name)
        str = str.replace('<<full name>>', fullname)
        str = str.replace('xxxxxxxxxx', mobile)
        var date = new Date().toLocaleDateString();
        str = str.replace('01/01/2016', date)
        console.log(str)


    },









  

   

}


