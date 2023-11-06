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

    it('accept a number array', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]
        
        var mtrx = new Mtrx([
            [1,2,3],
            [4,5,6]
        ]);
        expect(new Mtrx(a)).to.deep.equal(a)
    })

    it('accept Mtrx', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]
        
        var mtrx = new Mtrx([
            [1,2,3],
            [4,5,6]
        ]);
        expect(new Mtrx(mtrx)).to.deep.equal(a)
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
        expect(mtrx.rows).to.equal(2)
    })
    it('get cols', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]        
        var mtrx = new Mtrx(a);
        expect(mtrx.cols).to.equal(3)
    })
    it('add matrix', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]    
        const b = [
            [6,5,4],
            [3,2,1]
        ]     
        const c = [
            [7,7,7],
            [7,7,7]
        ]
        var mtrx1 = new Mtrx(a);
        var mtrx2 = new Mtrx(b);
        var mtrx3 = mtrx1.add(mtrx2)
        console.log(mtrx3)
        expect(mtrx3).to.deep.equal(c)
    })
})