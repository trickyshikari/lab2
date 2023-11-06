const create = require('./create')

class Mtrx extends Array{
    constructor(rows=1, cols=rows, type){
        let fn = (matrix) => create((i, j) => matrix[i][j])(matrix.length, matrix[0].length)

        super(...fn(rows, cols, type))
    }

    get(i, j) { return this[i][j] }
    set(i, j, a) {
        if(typeof a === 'number'){
            this[i][j] = a
        }        
    }

    get rows() { return this.length }
    get cols() { return this[0].length }
}



module.exports = Mtrx