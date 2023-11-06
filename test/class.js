const { expect } = require('chai')
const Mtrx = require('../scr/Mtrx')
const assert = require('chai').expect

describe('constructor', function(){
    it('accept a matrix', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]
        
        var mtrx = new Mtrx(a);
        expect(new Mtrx(a)).to.deep.equal(a)
    })

    it('get', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]        
        var mtrx = new Mtrx(a);

        expect(mtrx.get(0,0)).to.equal(1)
    })

    it('set', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]        
        var mtrx = new Mtrx(a);
        mtrx.set(0,0,2);
        expect(mtrx.get(0,0)).to.equal(2)
    })
    it('get rows', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]        
        var mtrx = new Mtrx(a);
        expect(mtrx.rows()).to.equal(2)
    })
    it('get cols', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]        
        var mtrx = new Mtrx(a);
        expect(mtrx.cols()).to.equal(3)
    })
})