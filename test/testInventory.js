/***************************************************************************************************
 * Execution :  cmd > testInventory.js
 * purpose   : testing the inventary.js file
 * 
 * 
 * @description 
 * @file     :  testInventory.js
 * @overview :  I/P -> read in JSON File 
 *              Logic -> Get JSON Object in Java or NSDictionary in iOS.Create Inventory Object from JSON. Calculate the value for every Inventory. 
 *              O/P -> Create the JSON from Inventory Object and output the JSON String 2 
 * @module   :  inventory.js >This is a optional if expicitly its an npm or local package
 * @author   :  Deepu.M
 * @version  :  npm 6.9.0
 * @since    :  13/5/2019
 * 
 **********************************************************************************************************/





const assert = require('chai').assert
let invetory = require('C:/Users/DEEPU/Desktop/javascript/Oops/Oopsprograms/inventory.js')
var fs=require('fs')
let jsonn=fs.readFileSync('C:/Users/DEEPU/Desktop/javascript/Oops/jsonfiles/inventary.json')
let jsss=JSON.parse(jsonn)
describe('inventory testing', function () {
    it('custemer name is should be in string format', function () {
        var i=0
        let result = jsss.Details[i].costumerName
        assert.isString(result)
    })
    it('weight should be in digits', function () {
    
        let result = jsss.Details[1].weight
        assert.isNumber(result)
    })
    it('price should be in digits', function () {
        var i=0
        let result = jsss.Details[1].price
        assert.isNumber(result)
    })
    it('totalprice should be in digits', function () {
        var i=0
        let result = jsss.Details[1].totalprice
        assert.isNumber(result)
    })
})