const create = require('./create')

class Mtrx extends Array{
    constructor(rows=1, cols=rows, type){
        let fn
        fn = (r, c=r) => create(() => 0)(r, c)

        super(...fn(rows, cols, type))
    }
}

module.exports = Mtrx