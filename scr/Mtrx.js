
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
    mul(obj) { return Mtrx.mul(this, obj) }
    static mul(obj, another) {
        let matrix
        const mulNumber = (A, m) => map(A, (n) => m * n)
        if (isNumber(obj) && isMtrxLike(another)) {
          matrix =  mulNumber(another, obj)
        } else if (isMtrxLike(obj) && isNumber(another)) {
          matrix = mulNumber(obj, another)
        } else if (isMtrxLike(obj) && isMtrxLike(another)) {
          matrix =  multiply(obj, another)
        } else {
          throw TypeError(obj + ' is not a Number or a MtrxLike, \n Or ' +
                          another + ' is not a Number or a MtrxLike.')
        }
        return new Mtrx(matrix)
      }
}

function multiply(matrix, another) {
    const m = new Array(matrix.length);

    for (let row = 0; row < matrix.length; row++) {
        m[row] = new Array(another[0].length);

        for (let column = 0; column < another[0].length; column++) {
            m[row][column] = 0;

            for (let i = 0; i < matrix[0].length; i++) {
                m[row][column] += matrix[row][i] * another[i][column];
            }
        }
    }

    return m;
}

  function isNumber(obj) {
    return typeof obj === 'number'
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

  function create(fn) {
    return function(rows=1, cols=rows) {
      const matrix = Array(rows)
      for (let i = 0; i < rows; i++) {
        matrix[i] = Array(cols)
        for (let j = 0; j < cols; j++) {
          matrix[i][j] = fn(i, j)
        }
      }
      return matrix
    }
  }


module.exports = Mtrx