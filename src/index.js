class  SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.array = [];
    this.array.push(initialValue);
  }

  add(number) {
    // your implementation
    this.array.push("+");
    this.array.push(number);
    return this;
  }

  subtract(number) {
    // your implementation
    this.array.push("-");
    this.array.push(number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.array.push("*");
    this.array.push(number);
    return this;
  }

  devide(number) {
    // your implementation
    this.array.push("/");
    this.array.push(number);
    return this;
  }

  pow(number) {
    // your implementation
    this.array.push("^");
    this.array.push(number);
    return this;
  }

  valueOf() {
    return this.solve();
  }

  solve() {
    if (this.array.length === 1) return this.array[0];

    let array = this.array.slice();
    let temp = 0;
    let ind = 0;
    
    while (array.indexOf("^") !== -1) {
      if (array.indexOf("^") !== -1) {
        ind = array.lastIndexOf("^");
        temp = Math.pow(array[ind-1], array[ind+1]);
        array[ind-1] = temp;
        array.splice(ind, 2);
      }
    }
    
    while (array.indexOf("*") !== -1 || array.indexOf("/") !== -1) {
      let indMul = array.indexOf("*");
      let indDiv = array.indexOf("/");
      if (indDiv == -1 || indMul < indDiv && indMul !== -1) {
        temp = array[indMul-1]*array[indMul+1];
        array[indMul-1] = temp;
        array.splice(indMul, 2);
      } else {
        temp = array[indDiv-1]/array[indDiv+1];
        array[indDiv-1] = temp;
        array.splice(indDiv, 2);
      }
    }

    while (array.indexOf("+") !== -1 || array.indexOf("-") !== -1) {
      let indPlus = array.indexOf("+");
      let indMinus = array.indexOf("-");
      if (indMinus == -1 || indPlus < indMinus && indPlus !== -1) {
        temp = array[indPlus-1]+array[indPlus+1];
        array[indPlus-1] = temp;
        array.splice(indPlus, 2);
      } else {
        temp = array[indMinus-1]-array[indMinus+1];
        array[indMinus-1] = temp;
        array.splice(indMinus, 2);
      }
    }

    return array[0];
  }

}

module.exports = SmartCalculator;
