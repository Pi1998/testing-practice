class Calculator {
  constructor() {
    this.value = 0;
  }

  add(number) {
    this.value += number;
    return this;
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by 0 is not allowed!');
    }
    this.value /= number;
    return this;
  }

  getResult() {
    return this.value;
  }
}

module.exports = Calculator;
//   const calculator = new Calculator();
//   const result = calculator.add(5).multiply(3).subtract(2).divide(2).getResult();
//   console.log("Final result:", result); // Output: 5
