const assert=require('chai').assert
const deckk=require('C:/Users/DEEPU/Desktop/javascript/Oops/Oopsprograms/DeckOfCards.js')
describe('deck card testinf ',function(){

    it('deck should returns the array',function(){

        assert.isString(deckk.deck)
    })
    it('str should returns the string',function(){

        assert.isString(deckk.str)
    })
    it('arr should returns the array',function(){

        assert.isArray(deckk.arr)
    })
})