const Mtrx = require('../scr/Mtrx')
const assert = require('chai').assert

describe('constructor'), function(){
    it('accept a matrix', function(){
        const a = [
            [1,2,3],
            [4,5,6]
        ]
        assert.deepEqual(new Mtrx(a), a)
    })
}