const { expect } = require('chai')
const Mtrx = require('../scr/Mtrx')
const assert = require('chai').expect

describe('constructor', function(){
    it('accept a matrix', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]
        
        var mtrx = Array(a);
        expect(new Mtrx(a)).to.deep.equal(mtrx)
    })
})