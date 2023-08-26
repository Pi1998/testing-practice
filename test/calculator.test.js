const Calculator = require('../tasks/calculator.js');

describe('Test if calculator works', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers', () => {
    calculator.add(3).add(4);
    expect(calculator.getResult()).toBe(7);
  });

  test('should subtract two numbers', () => {
    calculator.add(3).subtract(4);
    expect(calculator.getResult()).toBe(-1);
  });
  test('should multiply two numbers', () => {
    calculator.add(3).multiply(4);
    expect(calculator.getResult()).toBe(12);
  });
  describe('should divide a number', () => {
    test('should throw error for zero division', () => {
      expect(() => {
        calculator.divide(0);
      }).toThrow('Division by 0 is not allowed!');
    });

    test('should divide a number properly', () => {
      calculator.add(15).divide(3);
      expect(calculator.getResult()).toBe(5);
    });
  });
});