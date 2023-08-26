const stringLength = require('../tasks/stringLength.js');

test('Return correct length of string', () => {
  const inputString = 'Hello';
  const result = stringLength(inputString);
  expect(result).toBe(5);
});

test('Throws error for empty string', () => {
  const inputString = '';
  expect(() => {
    stringLength(inputString);
  }).toThrow('String length must be at least one character long!');
});

test('Throws error for string longer than 10 characters', () => {
  const inputString = 'More than 10 characters';
  expect(() => {
    stringLength(inputString);
  }).toThrow('String length must not be longer than 10 characters!');
});