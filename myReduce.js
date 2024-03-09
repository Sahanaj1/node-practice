const myReduce = function (callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  
    let accumulator = initialValue === undefined ? this[0] : initialValue;
  
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
  };
  
  module.exports = myReduce;
  