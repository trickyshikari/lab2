const create = require('./create')

class Mtrx extends Array{
    constructor(rows=1, cols=rows, type){
        let fn
        if (isMtrxLike(rows)) {
            fn = (matrix) => create((i, j) => matrix[i][j])(matrix.length, matrix[0].length)
        } else if (type == null) {
            fn = create(() => Math.random())
          }
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

    add(matrix){
        if(this.length != matrix.length) throw TypeError('Diferent matrices')
        if(this[0].cols != matrix[0].cols) throw TypeError('Diferent matrices')
        const addition = (A, B) => map(A, (n, i, j) => n + B[i][j])
        
        return new Mtrx(addition(this, matrix))
    }

    sub(matrix){
        if(this.length != matrix.length) throw TypeError('Diferent matrices')
        if(this[0].cols != matrix[0].cols) throw TypeError('Diferent matrices')
        const addition = (A, B) => map(A, (n, i, j) => n - B[i][j])
        
        return new Mtrx(addition(this, matrix))
    }
}

function isNumberArray (obj) {
    const len = obj.length
    if (!Array.isArray(obj) || len <= 0) return false
  
    for (let i = 0; i < len; i++) {
      if (typeof obj[i] !== 'number') return false
    }
    return true
  }

function isMtrxLike(obj)  {
    return Array.isArray(obj) &&
      obj.length > 0 &&
      obj[0].length > 0 &&
      obj.every(rows => isNumberArray(rows) && rows.length === obj[0].length)
  }

function map(matrix, fn) {
    return matrix.map(
      (r, rIndex) => r.map(
        (c, cIndex) => fn(c, rIndex, cIndex)))
  }


module.exports = Mtrx